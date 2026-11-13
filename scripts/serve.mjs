import http from 'node:http';
import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../content/portfolio.mjs';
const root = fileURLToPath(new URL('../docs/', import.meta.url));
const base = new URL(site.url).pathname;
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.pdf':'application/pdf','.pptx':'application/vnd.openxmlformats-officedocument.presentationml.presentation','.mp4':'video/mp4','.webm':'video/webm','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
const server=http.createServer(async(req,res)=>{
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405);res.end();return;}
  const send = async(file, code=200)=>{
    if(extname(file)==='.mp4'&&code===200){
      const {size}=await stat(file);
      const headers={'Content-Type':'video/mp4','Accept-Ranges':'bytes','Cache-Control':'no-store'};
      let start=0,end=size-1;
      if(req.headers.range){
        const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        if(!match||(!match[1]&&!match[2])){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return;}
        if(match[1]){start=Number(match[1]);if(match[2])end=Math.min(Number(match[2]),end);}
        else start=Math.max(0,size-Number(match[2]));
        if(start>=size||start>end){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return;}
        headers['Content-Range']=`bytes ${start}-${end}/${size}`;
      }
      headers['Content-Length']=end-start+1;
      res.writeHead(req.headers.range?206:200,headers);
      if(req.method==='HEAD')res.end();else createReadStream(file,{start,end}).pipe(res);
      return;
    }
    let bytes=await readFile(file);
    // 로컬 미리보기에서만 사용하는 JavaScript 없는 HTML 검증 모드.
    if(extname(file)==='.html' && new URL(req.url,'http://localhost').searchParams.has('nojs'))bytes=Buffer.from(bytes.toString('utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,''));
    res.writeHead(code,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    res.end(req.method==='HEAD'?undefined:bytes);
  };
  try {
    const url = new URL(req.url,'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    if(pathname==='/' || pathname===base.slice(0,-1)){res.writeHead(302,{Location:base});res.end();return;}
    if(!pathname.startsWith(base)){await send(resolve(root,'404.html'),404);return;}
    let filename=resolve(root,pathname.slice(base.length));
    if(filename!==resolve(root) && !filename.startsWith(resolve(root)+sep)){res.writeHead(403);res.end();return;}
    const info=await stat(filename);
    if(info.isDirectory()) {
      if(!pathname.endsWith('/')){res.writeHead(301,{Location:url.pathname+'/'+url.search});res.end();return;}
      filename=resolve(filename,'index.html');
    }
    await send(filename);
  } catch(error) {
    if(error instanceof URIError){res.writeHead(400);res.end('Invalid URL');return;}
    try{await send(resolve(root,'404.html'),404);}catch{res.writeHead(500);res.end('Build the site first.');}
  }
});
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}${base}`));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close());
