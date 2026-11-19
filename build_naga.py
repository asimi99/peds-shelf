import json,glob
out=[]
for f in sorted(glob.glob('naga/*.json')):
    d=json.load(open(f))
    out.append({"key":"n_"+d["id"],"id":d["id"],"who":"Dr Osama Naga","title":d["title"],"len":d["len"],"approx":bool(d.get("approx")),"sys":d.get("sys"),"sections":d["sections"]})
open('naga.js','w').write('window.NAGA='+json.dumps(out,ensure_ascii=False)+';\n')
print(len(out),sum(len(x['sections']) for x in out))
