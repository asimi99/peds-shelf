import json,glob,os
K=[("gi","GI and nutrition",[("xWIAWmMZioo","Pediatric GI, Part 1: Nutrition and acute abdomen","1:00:56"),("ovVm2EeacU4","Pediatric GI, Part 2: Upper and lower GI","1:19:24"),("it3gIEwcFSI","Pediatric GI, Part 3: Lower GI, bleeding and liver","1:11:09")]),
("cv","Cardiovascular",[("t95Rjxn1X8w","Pediatric Cardiology I: Chest pain, syncope, murmurs, heart failure","23:44"),("sBjdf0bZA4c","Pediatric Cardiology II: Congenital heart defects","27:17"),("WiXGhrO49kU","Simplified Pediatric ECG Interpretation","50:51")]),
("renal","Renal and electrolytes",[("m1KhN5hhooA","Renal Disorders I","30:56"),("CB8DiBldnKY","Renal Disorders II","38:22"),("sP3o0qcPoGM","Renal Disorders III: Tubular disease, AKI, enuresis, hypertension","42:52"),("SrtvlSsJzrU","Dehydration, fluids and electrolytes","51:16")]),
("endo","Endocrine and metabolism",[("cU8dxV6IVTA","Endocrine Disorders","2:33:59"),("CMWg4O8_TGY","Metabolic Disorders","39:25")]),
("pulm","Pulmonary",[("DoQLH82QVZI","Respiratory Disorders","2:05:04"),("T_iOTXPYp9s","Asthma Management (new guideline)","37:34")]),
("neuro","Neuro",[("PRz4BjBXvV8","Pediatric Neurology","1:45:39")]),
("heme","Heme and onc",[("chSzASUZHko","Pediatric Hematology Board Review","2:16:50"),("Q4kheuaX8ao","Leukemia and Lymphoma","33:54"),("ddI6c-XT4Bg","Brain Tumors and Solid Masses","31:42")]),
("psych","Psych",[("ScZTwgZgQlc","ADHD","21:37"),("GTYXOmODHHc","Autism Spectrum Disorder","15:32")]),
("tox","Poisoning",[("Zh-NMjWB-i0","Pediatric Emergency Medicine","45:01"),("0Mv9aA9F3xM","Foreign Body Ingestions (updated guidelines)","6:59")]),
("immuno","Allergy and immunology",[("otmJ72_ctz0","Immunologic Disorders","48:22")]),
("frepro","Female repro",[("YORjYrfzQ10","Labial Adhesion","3:56")]),
("multi","Multisystem and genetics",[("uJH4s2ZmPaU","Genetic Disorders I","22:57"),("w5IhrBLM_LI","Genetic Disorders II","15:28"),("m1o_HfViIBY","Genetic Disorders III","40:45")]),
("ent","ENT",[("mpW672XvTDI","Hearing Loss and Audiograms","15:03"),("0nDGidKiAmc","Otitis Media","9:39")]),
("id","Infectious diseases",[("MCajj6eQ6oo","Antibiotics (ID I)","41:22"),("a-CCxW4WhUw","Staph aureus (ID II)","20:07"),("yoTIeRNV86k","Streptococcal Infections (ID III)","15:11"),("2W1mV2F9wVY","Viral Infections (ID IV)","31:17")]),
("newborn","Newborn",[("MB-tYihLi3A","Neonatal Sepsis and Jaundice","26:35"),("5t1zOzVWu54","Newborn Examination","47:55")]),
("derm","Dermatology",[("dPdv10lm1OI","Pediatric Dermatology","1:04:08")]),
("msk","Rheumatology and orthopedics",[("M6BvRbh3S5Y","Pediatric Rheumatology","33:11"),("xWwLFbvLLaY","The Limping Child","32:48")]),
("gen","General pediatrics",[("IrTqUqu_OcY","General Pediatrics Board Review","1:28:45"),("obkrsMyFsdU","Developmental Milestones 2026","9:15"),("8wv-cXAFZ6U","Research and Statistics","18:21")])]
def sec(s):
    v=0
    for x in s.split(':'): v=v*60+int(x)
    return v
pbr=[];naga=[]
for sid,name,vs in K:
    g={'sys':sid,'name':name,'v':[]}
    for vid,title,l in vs:
        g['v'].append({'id':vid,'title':title,'len':sec(l)})
        f='naga/%s.json'%vid
        d=json.load(open(f)) if os.path.exists(f) else {'title':title,'len':sec(l),'sections':[]}
        naga.append({"key":"n_"+vid,"id":vid,"who":"Dr Osama Naga","title":d.get('title',title),"len":d.get('len',sec(l)),"approx":bool(d.get('approx')),"sys":sid,"sections":d['sections'],"tx":os.path.exists('tx/%s.json'%vid)})
    pbr.append(g)
open('pbr.js','w').write('window.PBR_CH={"name":"Pediatric Board A Last-Minute Review","url":"https://www.youtube.com/@pediatricboardalastminuter1892"};\nwindow.PBR='+json.dumps(pbr)+';\n')
open('naga.js','w').write('window.NAGA='+json.dumps(naga,ensure_ascii=False)+';\n')
print(len(naga),sum(1 for x in naga if x['sections']),sum(1 for x in naga if x['tx']))
