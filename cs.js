// Comparative cheat sheets by subject. Each sheet: root question -> category boxes -> condition cards.
// Card = [condition, what it is / key feature, how the kid looks on UWorld]. **x** = red bold buzz phrase.
window.CS=[
{id:'cardio',al:'cardiology cardiac heart cardio cardiovascular cvs',name:'Cardiology',sheets:[
{id:'chd',t:'Congenital heart defects',q:'Blue baby or pink baby? Then: shunt or blockage?',cmp:{h:['Cyanotic (right to left)','Acyanotic: shunt (left to right)','Acyanotic: obstruction'],t:['b','a','c'],r:[
 ['Colour','**Blue at rest**, worse with crying or feeding','Pink','Pink. **Grey and mottled** if a duct-dependent lesion is closing'],
 ['When it shows','**First hours to days** (as the PDA closes)','**4 to 8 weeks** (as pulmonary resistance falls and the shunt grows)','Newborn shock when the PDA closes, or an older kid with high BP, a murmur or exertional syncope'],
 ['100% O2 (hyperoxia test)','**PaO2 stays under 150**. O2 barely helps','Sats normal. O2 is not the treatment','Sats normal. Coarctation can show **higher right arm than leg sats** before repair'],
 ['Core problem','Not enough oxygenated blood reaches the body (mixing or too little lung flow)','**Too much blood to the lungs**, volume load, heart failure','Pressure load on one ventricle, low flow past the block'],
 ['How the kid looks','Cyanosis, **tet spells**, later clubbing and polycythemia','**Sweating with feeds, poor weight gain, tachypnea, hepatomegaly**, recurrent chest infections','**Weak or delayed femoral pulses, arm BP higher than legs**, ejection murmur, click, syncope with exercise'],
 ['Chest X-ray','**Less lung blood**: tetralogy (boot), tricuspid atresia, Ebstein (huge heart). **More lung blood**: TGA (egg on a string), truncus, TAPVR (snowman)','**Increased pulmonary markings**, big heart','Lungs usually normal. **Rib notching** and figure 3 in older coarctation'],
 ['What helps','**PGE1 keeps the PDA open**. Tet spell: **knees to chest or squatting** (raises SVR), O2, morphine, fluids, phenylephrine','Diuretics, extra calories, **indomethacin to close a PDA**, surgery for heart failure or pulmonary hypertension','**PGE1 in a newborn** with coarctation or critical AS, then balloon or surgical repair'],
 ['What does not help or hurts','**100% O2 does not fix it**. Crying, dehydration and agitation trigger tet spells','Waiting too long: **Eisenmenger** (shunt reverses, late cyanosis, now inoperable)','**Indomethacin or letting the PDA close** in a duct-dependent lesion causes shock'],
 ['Late risks','Polycythemia, **stroke, brain abscess** (clots skip the lung filter)','Eisenmenger, **paradoxical embolus** (ASD), endocarditis (VSD)','Hypertension, LVH, aortic dissection or aneurysm, early coronary disease'],
 ['Members','The 5 Ts plus Ebstein and HLHS: **Truncus, TGA, Tricuspid atresia, Tetralogy, TAPVR**','**VSD, ASD, PDA, AV canal**','**Coarctation, aortic stenosis, pulmonic stenosis**']]},
 g:[
 {h:'Cyanotic (right to left)',c:'b',r:'Blue in the first days. **100% O2 does not fix it** (PaO2 stays low = heart, not lung). Most need **PGE1 to keep the PDA open**.',x:[
  ['Transposition of the great arteries','Aorta off the RV, pulmonary artery off the LV. Parallel circuits. **Single loud S2, often no murmur**','Day 1 to 2, deep cyanosis, no distress, **infant of a diabetic mother**. CXR: **egg on a string**. Next: PGE1, then balloon septostomy, then **arterial switch**'],
  ['Tetralogy of Fallot','VSD, **pulmonic stenosis**, overriding aorta, RVH. Cyanosis tracks with how tight the RV outflow is','Toddler who **squats after playing**, or turns blue and limp when crying (**tet spell**). Harsh systolic murmur at left upper sternal border. CXR: **boot-shaped heart**. Spell: knees to chest, O2, morphine, fluids, phenylephrine'],
  ['Truncus arteriosus','One vessel feeds aorta and lungs. Single S2','Newborn with mild cyanosis then heart failure. **DiGeorge**: hypocalcemic seizure, absent thymus'],
  ['Tricuspid atresia','No tricuspid valve, small RV. Needs ASD plus VSD to survive','Cyanotic newborn with **left axis deviation and LVH** on ECG, the only cyanotic lesion with LVH'],
  ['Total anomalous pulmonary venous return','Pulmonary veins drain to the right side','Cyanosis with tachypnea. CXR: **snowman** or, if obstructed, a small heart with **pulmonary edema** look'],
  ['Ebstein anomaly','Tricuspid valve sits low, giant right atrium','Mother took **lithium**. Cyanosis, huge heart on CXR, **WPW** on ECG'],
  ['Hypoplastic left heart','Tiny LV and aorta. Systemic flow depends on the PDA','Well for 1 to 2 days, then **shock, grey, weak pulses everywhere** when the duct closes. PGE1 then staged Norwood']]},
 {h:'Acyanotic: shunt (left to right)',c:'a',r:'Pink. Extra blood to the lungs. Big ones cause **heart failure at 4 to 8 weeks** (sweaty feeds, poor weight gain, tachypnea). Untreated: **Eisenmenger** (late cyanosis).',x:[
  ['VSD','**Most common** defect. **Holosystolic murmur, lower left sternal border**. **Louder = smaller**','Healthy baby with a harsh holosystolic murmur, or a big VSD with FTT and sweating with feeds. Small ones close alone. Surgery for FTT or pulmonary hypertension'],
  ['ASD (secundum)','Usually silent in infancy. **Fixed, wide split S2**, soft systolic flow murmur at left upper sternal border','School-age kid picked up on a physical. Risk later: **paradoxical embolus**, AFib'],
  ['PDA','**Continuous machine murmur**, left infraclavicular. **Bounding pulses, wide pulse pressure**','**Preemie** or **congenital rubella**. Close it with **indomethacin or ibuprofen**. Keep it open with PGE1'],
  ['Atrioventricular septal (endocardial cushion) defect','ASD plus VSD plus one common AV valve','**Down syndrome**. Heart failure in infancy. **Fixed split S2** plus an ejection murmur at the left upper sternal border. Echo every Down newborn'],
  ['Partial anomalous pulmonary venous return','Some pulmonary veins drain to the right side, often with an ASD','Teen with **exertional dyspnea**, prominent right heart border, **O2 step-up at the right atrium** (VSD steps up at the RV). Surgery']]},
 {h:'Acyanotic: obstruction',c:'c',r:'Pink but the blockage strains a ventricle. Severe forms in newborns are **duct-dependent** and present as shock.',x:[
  ['Coarctation of the aorta','Narrowing near the ductus','Newborn: shock, **weak femoral pulses** when the PDA closes (PGE1). Older kid: **arm BP higher than legs**, headache, leg cramps, **rib notching**, **figure 3 sign**. **Turner syndrome**, bicuspid valve'],
  ['Aortic stenosis','Crescendo-decrescendo at right upper sternal border, radiates to carotids, ejection click','Teen with exertional syncope or chest pain. **Supravalvular AS = Williams** (elfin face, hypercalcemia, very friendly)'],
  ['Pulmonic stenosis','Systolic ejection murmur left upper sternal border with click','Usually mild and found by chance. **Noonan syndrome** (webbed neck, normal karyotype), congenital rubella (peripheral PS)'],
  ['Hypertrophic cardiomyopathy, infant of a diabetic mother','Fetal hyperinsulinism thickens the septum, **dynamic LV outflow obstruction**','Macrosomic, plethoric newborn with a systolic ejection murmur, echo shows a **thick septum and small LV**. Treat with **IV fluids and propranolol**. **Avoid inotropes, diuretics, vasodilators**. Regresses by age 1']]}],
 k:[['Hyperoxia test','PaO2 under 150 on 100% O2 = cyanotic heart disease. Rises above 150 = lung disease'],['Single S2','TGA, truncus, tetralogy, tricuspid atresia'],['Prostaglandin E1','Any newborn in shock or deep cyanosis with a suspected duct-dependent lesion. Watch for **apnea**'],['Indomethacin','Closes the PDA. Opposite of PGE1']],
 im:[{h:'Cyanotic (UWorld blue badge)',c:'b',s:[['https://asimi99.github.io/peds-shelf/img/uw/l14009.jpg','Tetralogy of Fallot'],['https://asimi99.github.io/peds-shelf/img/uw/l1458.jpg','Tetralogy of Fallot'],['https://asimi99.github.io/peds-shelf/img/uw/l108376.jpg','Tetralogy circulation: outflow block forces right-to-left flow'],['https://asimi99.github.io/peds-shelf/img/uw/l95794.jpg','Transposition of the great arteries'],['https://asimi99.github.io/peds-shelf/img/uw/l111937.jpg','Hypoplastic left heart: RV feeds the body through the PDA']]},
  {h:'Acyanotic (UWorld red badge)',c:'a',s:[['https://asimi99.github.io/peds-shelf/img/uw/l17488.jpg','Ventricular septal defect'],['https://asimi99.github.io/peds-shelf/img/uw/l28491.jpg','Atrial septal defect'],['https://asimi99.github.io/peds-shelf/img/uw/l66336.jpg','Partial anomalous pulmonary venous return']]}]},
{id:'murmur',t:'Murmurs: innocent vs pathologic',q:'Can I reassure, or does this kid need an echo?',g:[
 {h:'Innocent (reassure)',c:'d',r:'Systolic, **soft (2/6 or less)**, changes with position, normal S2, well child.',x:[
  ['Still murmur','**Vibratory, musical**, lower left sternal border','Healthy 3 to 6 year old, louder lying down, softer sitting or standing'],
  ['Venous hum','**Continuous** soft hum **below the clavicle (often right)**, turbulent flow in the **jugular vein**','The one innocent murmur that is **continuous**. **Disappears lying flat, turning the head** or pressing the jugular vein, **louder sitting or standing**. Not a PDA (left infraclavicular, does not change with position)'],
  ['Pulmonary flow murmur','Soft ejection murmur left upper sternal border','Thin kid or teen, louder with fever or anemia'],
  ['Peripheral pulmonic stenosis','Soft murmur heard in back and axillae','Newborn or young infant, gone by 6 to 12 months']]},
 {h:'Pathologic (echo)',c:'b',r:'**Any diastolic or holosystolic murmur, 3/6 or louder, a thrill, abnormal S2, click** or symptoms.',x:[
  ['Holosystolic','VSD (lower left sternal border), mitral or tricuspid regurgitation','Murmur that covers S1 to S2 evenly'],
  ['Continuous machine','PDA','Preemie or rubella baby with bounding pulses'],
  ['Diastolic','Aortic regurgitation, mitral stenosis (old rheumatic fever)','Any diastolic murmur in a child is never innocent'],
  ['Fixed split S2','ASD','Split does not change with breathing']]},
 {h:'Maneuvers that flip the answer',c:'e',r:'Less preload makes most murmurs softer. **HOCM and MVP do the opposite**.',x:[
  ['Hypertrophic cardiomyopathy','Outflow obstruction, autosomal dominant','Athlete who **collapses during sport**, family history of sudden death. Murmur **louder standing or Valsalva, softer squatting**. No sports, beta-blocker. Also **Friedreich ataxia** and infant of a diabetic mother'],
  ['Mitral valve prolapse','Midsystolic click then late murmur','Marfan or Ehlers-Danlos teen. Click comes earlier standing'],
  ['Aortic stenosis','Fixed obstruction','Softer standing (opposite of HOCM). Louder squatting']]}],
 k:[['Echo','Diastolic, holosystolic, over 2/6, symptoms or a syndrome'],['Reassure','Soft systolic, positional, well child, normal S2']],
 im:[{h:'Innocent murmurs',c:'d',s:[['https://asimi99.github.io/peds-shelf/img/uw/l93549.jpg','Venous hum, pulmonic flow murmur and Still murmur']]},{h:'Hypertrophic cardiomyopathy',c:'e',s:[['https://asimi99.github.io/peds-shelf/img/uw/l25351.jpg','Thick septum and mitral leaflet block the outflow tract'],['https://asimi99.github.io/peds-shelf/img/uw/l16318.jpg','Infant of a diabetic mother: transient septal hypertrophy']]}]},
{id:'acquired',t:'Acquired heart disease',q:'Previously healthy heart, now sick: fever and what else?',g:[
 {h:'Inflammatory, after an infection',c:'b',r:'Follows a trigger. Look at the timeline.',x:[
  ['Kawasaki disease','Medium vessel vasculitis. Fever **5 days or more** plus 4 of 5: **conjunctivitis (no pus), strawberry tongue and cracked lips, neck node, hand and foot swelling then peeling, rash**','Under 5, irritable, fever not responding to antibiotics. Labs: high ESR, CRP, **platelets high in week 2**. Risk: **coronary aneurysm**. Next: **echo, IVIG plus high-dose aspirin**'],
  ['Acute rheumatic fever','2 to 4 weeks after **untreated strep throat**. Jones criteria: **carditis, migratory polyarthritis, chorea, erythema marginatum, subcutaneous nodules**','School-age kid with moving joint pain, new murmur, **long PR interval**. **Penicillin** now and as prophylaxis. Later: **mitral stenosis**'],
  ['Viral myocarditis','Coxsackie B, adenovirus, parvovirus','Days after a cold: **tachycardia out of proportion to fever**, gallop, hepatomegaly, big heart on CXR. High troponin'],
  ['Pericarditis','Viral or after surgery','**Chest pain better leaning forward**, friction rub, diffuse ST elevation with PR depression']]},
 {h:'Infective endocarditis',c:'c',r:'Abnormal valve or line plus bacteremia.',x:[
  ['Endocarditis','S viridans after dental work, S aureus with lines or IV drug use','Fever plus new murmur, splinter hemorrhages. Blood cultures x3 before antibiotics'],
  ['Who gets dental prophylaxis','Amoxicillin before dental work only for high risk','**Prosthetic valve, prior endocarditis, unrepaired cyanotic disease**, repair within 6 months, heart transplant with valve disease. Not VSD, ASD or MVP alone']]}],
 k:[['Kawasaki vs scarlet fever','Both strawberry tongue. Kawasaki: conjunctivitis, lips, no response to antibiotics. Scarlet: sandpaper rash, positive strep'],['Kawasaki vs measles','Measles: cough, coryza, Koplik spots, rash head down']]},
{id:'rhythm',t:'Rhythms, syncope and spells',q:'Fast, slow or fainting?',g:[
 {h:'Fast',c:'b',r:'**Unstable = synchronized cardioversion** whatever the rhythm.',x:[
  ['Supraventricular tachycardia','Narrow complex, HR over 220 in infants, no P waves','Infant with poor feeding, pallor, HR 260. Stable: **vagal (ice to face), then adenosine**. Unstable: cardiovert'],
  ['Wolff-Parkinson-White','Accessory pathway, **delta wave, short PR**','Teen with palpitations. **Ebstein anomaly**. Avoid AV nodal blockers if AFib'],
  ['Ventricular tachycardia','Wide complex','Stable: **amiodarone**. Unstable or pulseless: shock'],
  ['Long QT','Congenital (Romano-Ward, **Jervell Lange-Nielsen with deafness**) or drugs','**Syncope with exercise, swimming or a loud noise**, family sudden death. Beta-blocker']]},
 {h:'Slow',c:'a',r:'Bradycardia in a newborn is usually hypoxia. Ventilate first.',x:[
  ['Congenital complete heart block','Maternal **anti-Ro (SSA) antibodies**','Fetal bradycardia, mother has **lupus** or Sjogren. Pacemaker if symptomatic'],
  ['Newborn bradycardia','HR under 100: ventilate. **HR under 60 after ventilation: compressions**','Apgar step']]},
 {h:'Fainting look-alikes',c:'e',r:'Ask what happened just before and just after.',x:[
  ['Vasovagal syncope','Trigger (standing, blood, heat), prodrome','Teen faints in church or at a blood draw, brief, back to normal fast. Reassure, fluids'],
  ['Cardiac syncope','HOCM, long QT, AS, anomalous coronary','**Syncope during exercise** or without warning = cardiac until proven otherwise. ECG and echo'],
  ['Seizure','Postictal confusion','Tongue biting, incontinence, **postictal state**. Syncope has none'],
  ['Breath-holding spell','Cyanotic (crying) or pallid (minor injury)','Angry toddler stops breathing, goes blue and limp, brief jerks. **Reassure**, check for **iron deficiency**']]}],
 k:[['Adenosine','Stable SVT'],['Amiodarone','Stable VT'],['Cardioversion','Any unstable tachycardia']]},
{id:'syndromes',t:'Syndrome to heart lesion',q:'Name the syndrome, name the heart.',g:[
 {h:'Chromosomal',c:'a',r:'Echo every newborn with these.',x:[
  ['Down syndrome (trisomy 21)','**Atrioventricular septal defect**','Flat face, single palmar crease, duodenal atresia'],
  ['Turner syndrome (45,X)','**Coarctation, bicuspid aortic valve**','Short girl, webbed neck, **swollen hands and feet at birth**, absent puberty'],
  ['DiGeorge (22q11 deletion)','**Truncus**, tetralogy, interrupted aortic arch','CATCH-22: hypocalcemic seizure, absent thymus, recurrent infections, cleft palate'],
  ['Williams (7q11 deletion)','**Supravalvular aortic stenosis**','Elfin face, **very friendly**, hypercalcemia'],
  ['Trisomy 18 and 13','VSD','Rocker-bottom feet, clenched fists (18). Cleft lip, holoprosencephaly, polydactyly (13)']]},
 {h:'Single gene',c:'c',r:'',x:[
  ['Noonan syndrome','**Pulmonic stenosis**, hypertrophic cardiomyopathy','Looks like Turner but boys too, normal karyotype'],
  ['Marfan syndrome','**Aortic root dilation**, MVP','Tall, long fingers, **lens up and out**'],
  ['Friedreich ataxia','**Hypertrophic cardiomyopathy** (main cause of death)','Teen with ataxia, lost reflexes, high arches']]},
 {h:'Exposure in pregnancy',c:'b',r:'',x:[
  ['Pre-gestational diabetes','**TGA**, VSD, septal hypertrophy','Big baby with hypoglycemia, caudal regression'],
  ['Lithium','**Ebstein anomaly**','Mother with bipolar disorder'],
  ['Maternal lupus','**Complete heart block**','Fetal bradycardia'],
  ['Congenital rubella','**PDA**, peripheral pulmonic stenosis','Cataracts, deafness, blueberry muffin rash'],
  ['Fetal alcohol','VSD','Smooth philtrum, thin upper lip, small head']]}]}
]},
{id:'pulm',al:'pulmonary respiratory lung lungs pulm breathing',name:'Pulmonary',sheets:[
{id:'stridor',t:'Upper airway: stridor',q:'Stridor = upper airway. Wheeze = lower. How sick, how fast, how old?',g:[
 {h:'Acute and febrile',c:'b',r:'Toxic kid: **do not lie them down, do not examine the throat**.',x:[
  ['Croup','**Parainfluenza**, subglottic swelling','6 months to 3 years, **barking seal cough**, worse at night, low fever. X-ray **steeple sign**. **Dexamethasone** for all, **racemic epinephrine** if stridor at rest'],
  ['Epiglottitis','H influenzae b, unvaccinated','Sudden high fever, **drooling, tripod position, muffled voice**, no cough. **Thumb sign**. Next: **secure the airway in the OR**'],
  ['Bacterial tracheitis','S aureus after a viral croup','Croup that **gets worse instead of better**, high fever, toxic, does not respond to racemic epi. Intubate, IV antibiotics'],
  ['Retropharyngeal abscess','Strep, S aureus, anaerobes','Under 5, fever, **will not move neck (extension)**, drooling. Wide prevertebral space on lateral X-ray. Risk mediastinitis'],
  ['Peritonsillar abscess','After tonsillitis, teen','**Hot potato voice, trismus, uvula deviates away**. Drain']]},
 {h:'Acute, no fever',c:'c',r:'',x:[
  ['Foreign body','Peanut, toy','Toddler, **sudden choking then stridor or one-sided wheeze**, hyperinflated side on expiratory film. **Bronchoscopy**'],
  ['Anaphylaxis','IgE','Stridor plus hives plus hypotension after food or sting. **IM epinephrine** first']]},
 {h:'Chronic from birth',c:'a',r:'Happy, growing baby with noisy breathing.',x:[
  ['Laryngomalacia','**Most common** cause of infant stridor, floppy supraglottis','Starts at 2 weeks, **worse lying on the back, feeding, crying**, better prone. Reassure, gone by 12 to 18 months'],
  ['Vascular ring','Double aortic arch','**Inspiratory and expiratory stridor**, better with **neck extension**, trouble swallowing solids. Barium swallow, CT'],
  ['Subglottic stenosis','After long intubation','Former preemie with persistent stridor'],
  ['Choanal atresia','Blocked nasal passage','**Cyanosis with feeding, pink when crying**, NG tube will not pass. **CHARGE**']]}]},
{id:'lower',t:'Lower airway: wheeze, cough and pneumonia',q:'Wheeze or crackles? How old?',g:[
 {h:'Wheeze',c:'a',r:'',x:[
  ['Bronchiolitis','**RSV**, under 2, winter','Runny nose for 2 days then wheeze, crackles, tachypnea, poor feeding. **Supportive** (suction, O2, fluids). **Steroids and bronchodilators do not help**. Admit if apnea, hypoxia, poor feeding, preemie'],
  ['Asthma','Reversible obstruction','Recurrent wheeze, night cough, eczema, family history. Response to SABA. See asthma sheet'],
  ['Foreign body','One-sided','Sudden onset, **one-sided wheeze**, or **recurrent pneumonia in the same lobe**'],
  ['GERD','Reflux aspiration','Wheeze or cough with feeds, back arching']]},
 {h:'Pneumonia by age',c:'b',r:'Lobar = bacterial. Interstitial = atypical or viral.',x:[
  ['Newborn','**GBS, E coli, Listeria**','Ampicillin plus gentamicin'],
  ['1 to 3 months, afebrile','**Chlamydia trachomatis**','**Staccato cough, no fever, eosinophilia**, had conjunctivitis at 1 to 2 weeks. Oral azithromycin'],
  ['4 months to 5 years','Viral most often, **strep pneumoniae** if lobar','High fever, lobar consolidation. **Amoxicillin**'],
  ['School age and teen','**Mycoplasma**','Walking pneumonia, headache, dry cough, X-ray worse than the kid looks. Macrolide']]},
 {h:'Paroxysmal cough',c:'e',r:'',x:[
  ['Pertussis','Bordetella, unvaccinated','Cold for 1 to 2 weeks then **coughing fits, whoop, vomiting after cough**, subconjunctival bleeds. Infant: **apnea**. **Lymphocytosis**. Azithromycin for patient and **all close contacts**']]}]},
{id:'newbornresp',t:'Newborn respiratory distress',q:'Preterm or term? C-section? Abdomen?',g:[
 {h:'Lung problem',c:'a',r:'',x:[
  ['Respiratory distress syndrome','**Surfactant deficiency**, atelectasis','**Preemie**, grunting from birth and getting worse. **Ground glass, air bronchograms**. L/S ratio under 2. Prevent: antenatal **betamethasone**. Treat: CPAP, surfactant. Also infant of a diabetic mother'],
  ['Transient tachypnea of the newborn','Slow lung fluid clearance','**Term, C-section**, fast breathing, mild O2 need, **fluid in the fissures**. Gone in 24 to 72 hours'],
  ['Meconium aspiration','Post-term, distress','Meconium-stained fluid, **patchy infiltrates, hyperinflation**. Risk persistent pulmonary hypertension'],
  ['Neonatal pneumonia','GBS','Mom GBS positive, prolonged rupture, maternal fever. Ampicillin plus gentamicin']]},
 {h:'Anatomy problem',c:'c',r:'',x:[
  ['Congenital diaphragmatic hernia','Left-sided usually, **pulmonary hypoplasia**','**Scaphoid abdomen, bowel sounds in chest**, heart pushed right. **Intubate, never bag-mask**. Deliver at an ECMO centre'],
  ['Tracheoesophageal fistula','Esophageal atresia','**Drooling, choking with first feed, NG tube coils**, polyhydramnios. **VACTERL** (echo and renal ultrasound)'],
  ['Choanal atresia','Nasal block','Cyanotic feeding, **pink crying**. CHARGE']]},
 {h:'Heart or vessels',c:'b',r:'',x:[
  ['Persistent pulmonary hypertension','Shunt through PDA and foramen ovale','**Pre-ductal (right hand) sats higher than post-ductal (foot)**. After meconium, sepsis, CDH. Nitric oxide'],
  ['Cyanotic heart disease','See cardiology','Hyperoxia test fails. Little distress for how blue']]}]},
{id:'asthma',t:'Asthma and cystic fibrosis',q:'How bad, and what step?',g:[
 {h:'Asthma steps',c:'a',r:'Step up when symptoms are frequent. Check technique and adherence first.',x:[
  ['Intermittent','SABA as needed','Symptoms 2 days a week or less'],
  ['Persistent','Add **low-dose inhaled corticosteroid**, then medium dose, or add LABA (age 6 and up)','Night waking, daily symptoms, SABA several times a week'],
  ['Severe','High-dose ICS plus LABA, then **oral steroid**','']]},
 {h:'Acute attack',c:'b',r:'',x:[
  ['Moderate attack','SABA back to back, ipratropium, **oral or IV steroid**','Wheeze, retractions, can speak phrases'],
  ['Danger signs','**Normal or rising PCO2** in an attack = tiring out','Silent chest, can not speak, drowsy. Magnesium, **intubate**']]},
 {h:'Cystic fibrosis',c:'c',r:'CFTR chloride channel, autosomal recessive, **delta F508**.',x:[
  ['Newborn','**Meconium ileus**, microcolon','No meconium, bilious vomiting, sticky stool in terminal ileum'],
  ['Infant and child','Pancreatic insufficiency','**Greasy foul stools, FTT, recurrent pneumonia**, nasal polyps, **rectal prolapse**, salty skin. Fat-soluble vitamins A, D, E, K'],
  ['Bugs','S aureus early, **Pseudomonas** later','Clubbing, bronchiectasis'],
  ['Diagnosis','**Sweat chloride** over 60','Newborn screen immunoreactive trypsinogen first']]}]}
]},
{id:'gi',al:'gastrointestinal gi gut bowel abdomen nutrition',name:'Gastrointestinal',sheets:[
{id:'vomit',t:'The vomiting infant',q:'Green or not green?',g:[
 {h:'Bilious (green) = obstruction below the ampulla',c:'b',r:'Surgical until proven otherwise.',x:[
  ['Malrotation with volvulus','Ladd bands, twist around SMA','**Sudden bilious vomiting in a well baby**, often first month. **Upper GI series**: corkscrew. Unstable or peritonitis: **straight to OR**'],
  ['Duodenal atresia','Failed recanalization','Vomiting in the first hours, **flat abdomen**, polyhydramnios. **Double bubble**. **Down syndrome**'],
  ['Jejunal or ileal atresia','Vascular accident','**Triple bubble**, distension, **maternal cocaine**'],
  ['Necrotizing enterocolitis','Ischemic bowel','**Preemie after starting feeds**: distension, bloody stool. **Pneumatosis intestinalis**. Stop feeds, NG, antibiotics. Free air: surgery'],
  ['Meconium ileus and Hirschsprung','Distal obstruction','See the no stool sheet']]},
 {h:'Nonbilious',c:'a',r:'',x:[
  ['Pyloric stenosis','Hypertrophied pylorus','**3 to 6 weeks, firstborn boy, projectile vomiting**, hungry after, **olive mass**. **Hypochloremic hypokalemic metabolic alkalosis**. **Ultrasound**. Fix fluids and electrolytes **before** pyloromyotomy. Macrolides early in life'],
  ['GERD (happy spitter)','Immature lower esophageal sphincter','Spits up, **growing well**. Reassure, small frequent feeds. FTT or back arching: then treat'],
  ['Cow milk protein allergy (FPIES)','Non-IgE','**Repetitive vomiting 1 to 4 hours after the trigger**, pale, lethargic, maybe hypotensive'],
  ['Increased ICP, inborn error, UTI, sepsis','Not GI at all','Vomiting with bulging fontanelle, odd odour, fever']]}],
 k:[['Intussusception','Older (6 months to 3 years): episodic colicky pain, knees to chest, **currant jelly stool**, **sausage mass**. **Ultrasound target sign**, **air enema** diagnoses and treats']]},
{id:'jaundice',t:'Neonatal jaundice',q:'Conjugated or unconjugated? When did it start?',g:[
 {h:'Unconjugated, benign',c:'d',r:'After 24 hours, well baby.',x:[
  ['Physiologic','Immature UGT, high red cell turnover','Day 2 to 5, peaks day 3 to 4'],
  ['Breastfeeding jaundice','**Not enough milk**','Week 1, **weight loss, few wet diapers**. Feed more often, supplement'],
  ['Breast milk jaundice','Enzyme in milk','Week 2, **thriving baby**. **Keep breastfeeding**']]},
 {h:'Unconjugated, pathologic',c:'b',r:'**Day 1 jaundice, rising fast, or over 12** = pathologic. First step: **Coombs**.',x:[
  ['Isoimmune hemolysis','ABO or Rh','Jaundice **in the first 24 hours**, positive direct Coombs, mother O or Rh negative'],
  ['Spherocytosis or G6PD','Red cell defect','Coombs negative, spherocytes or bite cells, family history'],
  ['Crigler-Najjar and Gilbert','Low or absent UGT','Crigler-Najjar type 1: very high, **kernicterus** risk. Gilbert: mild, with fasting or stress'],
  ['Kernicterus','Unconjugated bilirubin crosses into **basal ganglia**','Lethargy, high-pitched cry, arching. Late: deafness, choreoathetosis. Phototherapy **isomerizes** bilirubin, exchange transfusion if severe']]},
 {h:'Conjugated (direct over 1 to 2)',c:'c',r:'Always pathologic. Rule out **sepsis and UTI** first.',x:[
  ['Biliary atresia','Fibrosis of bile ducts','2 to 8 weeks, **pale stools, dark urine**, hepatomegaly. Ultrasound absent gallbladder, biopsy, **Kasai before 2 months**'],
  ['Biliary cyst','Dilated bile duct','Jaundice plus **right upper quadrant mass**'],
  ['Galactosemia','Galactose-1-phosphate uridyltransferase','Jaundice, **vomiting after milk, cataracts, E coli sepsis**. Stop breastfeeding'],
  ['Dubin-Johnson and Rotor','Excretion defect','Dubin-Johnson: **black liver**. Rotor: no pigment, milder']]}]},
{id:'stool',t:'No stool or blood in the stool',q:'Has the baby ever passed meconium? Is the blood a streak or a lot?',g:[
 {h:'No meconium by 48 hours',c:'c',r:'',x:[
  ['Hirschsprung disease','No ganglion cells in distal colon','**Down syndrome**, tight sphincter, **empty rectal vault, explosive stool after rectal exam**. **Rectal suction biopsy**'],
  ['Meconium ileus','Thick meconium blocks terminal ileum','**Cystic fibrosis**. **Microcolon**, soap-bubble look. Gastrografin enema'],
  ['Meconium plug (small left colon)','Transient','**Infant of a diabetic mother**, passes after enema'],
  ['Imperforate anus','No opening','Look at the perineum. VACTERL']]},
 {h:'Blood in stool, well baby',c:'d',r:'',x:[
  ['Food protein-induced allergic proctocolitis','Cow milk protein','**Thriving breastfed baby with blood-streaked, mucusy stool**. Mother stops dairy'],
  ['Anal fissure','Hard stool','Bright red streaks on hard stool, pain with stooling. **Most common** cause in infants']]},
 {h:'Blood in stool, worried',c:'b',r:'',x:[
  ['Meckel diverticulum','Ectopic gastric mucosa','Rule of 2s, toddler, **painless large bleed**, anemia. **Technetium-99m scan**'],
  ['Intussusception','Telescoping, often ileocolic','**Colicky pain, knees to chest, fine between episodes, currant jelly stool**, lethargy. Target sign, air enema'],
  ['Hemolytic uremic syndrome','E coli O157:H7 toxin','Bloody diarrhea then **pallor, low platelets, low urine output**, schistocytes. **No antibiotics, no platelets**'],
  ['IBD','Crohn or UC','Teen with weight loss, bloody diarrhea, anemia, growth delay. See diarrhea sheet']]}]},
{id:'diarrhea',t:'Diarrhea, malabsorption and failure to thrive',q:'Acute or chronic? Bloody or greasy?',g:[
 {h:'Acute infectious',c:'a',r:'',x:[
  ['Rotavirus and norovirus','Viral','Rota: winter, unvaccinated infant. Noro: **daycare, cruise ship**. Watery, supportive, oral rehydration'],
  ['Shigella','Bloody','Bloody diarrhea plus **febrile seizure**'],
  ['Campylobacter, Salmonella, Yersinia','Bloody','Campy: **undercooked chicken**, later Guillain-Barre. Salmonella: **reptiles, eggs**. Yersinia: **mimics appendicitis**'],
  ['E coli O157:H7','Undercooked beef, petting zoo','Bloody without fever. **Antibiotics raise HUS risk**'],
  ['C difficile','After antibiotics','Oral vancomycin. Rare and often carriage under 1 year'],
  ['Giardia','Camping, daycare, well water','**Greasy foul stools, bloating**. Metronidazole']]},
 {h:'Chronic, malabsorption',c:'c',r:'',x:[
  ['Celiac disease','Gluten, **anti-tTG IgA** (check total IgA)','Diarrhea and **FTT after starting cereals**, iron deficiency, dermatitis herpetiformis, type 1 diabetes or Down. **Duodenal biopsy**'],
  ['Cystic fibrosis','Pancreatic insufficiency','Greasy stools plus lung infections. Sweat chloride'],
  ['Lactose intolerance','Lactase deficiency','Older child, bloating and watery diarrhea after milk. Rare in infants'],
  ['Toddler diarrhea','Too much juice','**Growing well**, undigested food in stool. Cut juice']]},
 {h:'Chronic, inflammatory',c:'b',r:'',x:[
  ['Crohn disease','**Transmural, skip lesions**, mouth to anus','Weight loss, growth delay, **perianal fistula**, RLQ pain'],
  ['Ulcerative colitis','**Always rectum**, continuous, mucosal','Bloody diarrhea, urgency. **PSC**, toxic megacolon']]}],
 k:[['Failure to thrive','Falls more than 2 major percentile lines. Most often **not enough calories** (watch the feeding)']]},
{id:'wall',t:'Abdominal wall and newborn GI',q:'Is there a sac?',g:[
 {h:'Wall defects',c:'a',r:'',x:[
  ['Gastroschisis','**Right of the cord, no sac**','Bowel floating free, usually **isolated**, young mother. Cover, fluids, surgery'],
  ['Omphalocele','**Midline, covered by a sac**','**Associated anomalies**: trisomy 13 and 18, **Beckwith-Wiedemann** (big tongue, hypoglycemia). Karyotype and echo'],
  ['Umbilical hernia','Reducible, covered by skin','Common, closes by itself. Surgery only if still there at **4 to 5 years** or incarcerated. Think **hypothyroidism** if big tongue too']]}]}
]},
{id:'renal',al:'renal kidney urinary nephrology nephro genitourinary gu',name:'Renal and urinary',sheets:[
{id:'glom',t:'Nephritic vs nephrotic',q:'Blood and high BP, or protein and swelling?',cmp:{h:['Nephritic','Nephrotic'],t:['b','a'],r:[
 ['Core problem','**Inflamed glomerulus**. Red cells leak, filtration falls','**Leaky podocytes**. Protein pours out, filtration is usually fine'],
 ['Urine','**Cola or tea coloured**, **red cell casts**, dysmorphic red cells, mild protein','**Frothy**, 3+ to 4+ protein, bland sediment, **fatty casts** and oval fat bodies'],
 ['Swelling','Mild, periorbital. From **salt and water retention**','**Marked**: eyelids in the morning, then legs, scrotum, ascites. From **low albumin**'],
 ['Blood pressure','**High**','Usually normal'],
 ['Creatinine','**Up**, low urine output','Usually normal'],
 ['Numbers','Hematuria over 5 red cells per high power field','Protein over **40 mg/m2/h** or urine protein to creatinine over **200 mg/mmol**, albumin under **25 g/L**, high cholesterol'],
 ['First test that sorts it','**C3**. Low: post-strep, MPGN, lupus. Normal: IgA, HSP, Alport','Age and response to steroids. 1 to 10 years with normal C3 and normal BP: **treat as minimal change, no biopsy**'],
 ['What kills or harms','Hypertensive encephalopathy (seizure), heart failure, hyperkalemia','**Infection** (pneumococcal peritonitis) and **clots** (renal vein, lung, sagittal sinus)'],
 ['Treatment','Salt and fluid restriction, **loop diuretic**, blood pressure control','**Prednisone**, salt restriction. Albumin plus furosemide only for severe edema']]},
 g:[
 {h:'Nephritic with LOW C3',c:'b',r:'Immune complexes eat complement.',x:[
  ['Post-streptococcal GN','Immune complexes, **low C3 that returns to normal by 6 to 8 weeks**. Subepithelial humps, lumpy-bumpy','**1 to 3 weeks after strep throat, 3 to 6 weeks after impetigo**. Cola urine, puffy eyes, high BP. ASO (throat) or **anti-DNase B (skin)**. Supportive. Penicillin clears the strep but **does not prevent** the nephritis. Almost all kids recover'],
  ['Membranoproliferative GN','**C3 stays low past 8 weeks**. Tram-track basement membrane','Looks like post-strep that never got better. Mixed nephritic and nephrotic. Hepatitis B or C'],
  ['Lupus nephritis','**Low C3 and C4**, anti-dsDNA','Teen girl, malar rash, joint pain, cytopenias, protein and blood in the urine']]},
 {h:'Nephritic with NORMAL C3',c:'c',r:'',x:[
  ['IgA nephropathy','Mesangial IgA','Gross hematuria **during or within 1 to 3 days of a cold** (no latent period), recurs with each infection'],
  ['IgA vasculitis (HSP)','Small vessel IgA. **Normal platelets and clotting**','**Palpable purpura on buttocks and legs**, joint pain, colicky belly pain, hematuria. Risk: **ileo-ileal intussusception**. Supportive. **Follow the urine and BP for 6 months**'],
  ['Alport syndrome','Type IV collagen, mostly X-linked. Basket-weave on electron microscopy','Boy with hematuria, **sensorineural hearing loss**, anterior lenticonus, and **uncles on dialysis**'],
  ['Thin basement membrane disease','Benign familial hematuria','Isolated **microscopic** hematuria, family has it too, normal BP and creatinine. Reassure'],
  ['Rapidly progressive GN','**Crescents** on biopsy','Creatinine climbing over days. Anti-GBM (with **hemoptysis**), ANCA vasculitis. Biopsy now, pulse steroids']]},
 {h:'Nephrotic',c:'a',r:'Edema, frothy urine, low albumin, high cholesterol.',x:[
  ['Minimal change disease','**Most common under 10**. Podocyte foot process effacement, **normal light microscopy**','2 to 6 years, **eyelid swelling mistaken for allergies**, after a cold. **Prednisone** without biopsy. Most respond in 4 weeks. **Relapses are common**'],
  ['Focal segmental glomerulosclerosis','Scarring of parts of some glomeruli','**Steroid-resistant**, older child or teen, Black children, sickle cell, HIV, obesity. Common cause of kidney failure'],
  ['Membranous nephropathy','Subepithelial deposits, spike and dome','Rare in kids. **Hepatitis B**, lupus'],
  ['Congenital nephrotic syndrome','Nephrin mutation (Finnish type)','**First 3 months of life**, large placenta, edema at birth, high maternal AFP'],
  ['When to biopsy','Not typical for minimal change','Under 1 or over 10 to 12 years, **low C3**, gross hematuria, high BP, raised creatinine, or **no remission after 4 to 8 weeks of steroids**']]},
 {h:'Nephrotic complications',c:'b',r:'',x:[
  ['Infection','Loses IgG and complement in the urine','**Spontaneous bacterial peritonitis** (strep pneumo): fever and belly pain in a swollen child. Give **pneumococcal vaccine**. No live vaccines on high-dose steroids'],
  ['Clots','Loses antithrombin III','**Renal vein thrombosis**: sudden flank pain, gross hematuria, creatinine up. Also leg, lung, sagittal sinus'],
  ['Low volume','Fluid is in the tissues, not the vessels','Swollen but **intravascularly dry**. Careful with diuretics, risk of kidney injury']]},
 {h:'Benign proteinuria',c:'d',r:'Well child, protein on a dipstick, nothing else.',x:[
  ['Orthostatic proteinuria','Protein only when upright','Tall teen. **First morning urine protein to creatinine is normal**. Reassure'],
  ['Transient proteinuria','Fever, exercise, dehydration, stress','**Repeat the urine** when well and it is gone']]}],
 k:[['C3 at 8 weeks','Back to normal = post-strep. Still low = MPGN or lupus, biopsy'],['Timing after infection','Same week = IgA nephropathy. 1 to 3 weeks later = post-strep'],['Swollen child with fever and belly pain','Nephrotic plus **peritonitis** until proven otherwise'],['Purpura with normal platelets','IgA vasculitis. Low platelets: think ITP, HUS or leukemia instead']]},
{id:'hematuria',t:'Red or dark urine',q:'Is it really blood? Then: from the glomerulus or from the plumbing?',g:[
 {h:'Not red cells',c:'d',r:'Check the dipstick AND the microscope.',x:[
  ['Dipstick negative','Pigment','Beets, rifampin, food dye. Newborn **pink or brick dust diaper** = urate crystals, benign, feed more'],
  ['Dipstick positive, no red cells','Heme pigment without cells','**Myoglobin** (rhabdomyolysis: muscle pain, high CK) or **hemoglobin** (hemolysis)']]},
 {h:'Glomerular',c:'b',r:'**Brown or cola**, painless, no clots, **red cell casts**, dysmorphic cells, protein.',x:[
  ['Work it up','See the nephritic sheet','BP, creatinine, **C3**, ASO, urine protein. Hearing and family history']]},
 {h:'Non-glomerular',c:'a',r:'**Bright red or pink**, clots, may hurt, normal-shaped red cells, no casts.',x:[
  ['UTI or cystitis','Most common cause of gross hematuria','Dysuria, frequency, positive culture'],
  ['Adenovirus hemorrhagic cystitis','Viral','Boy with gross hematuria and dysuria, **culture negative**, gone in days'],
  ['Idiopathic hypercalciuria','Common cause of persistent microscopic hematuria','Well child, family history of stones. **Urine calcium to creatinine ratio** high. Fluids, low salt'],
  ['Kidney stones','In a child, think **metabolic or anatomic cause**','Colicky flank pain, vomiting, hematuria. **Ultrasound first**. Cystinuria: **hexagonal crystals**. Proteus: struvite, alkaline urine'],
  ['Trauma','Blunt flank injury','Hematuria after **minor** trauma: think a big abnormal kidney (hydronephrosis, **Wilms tumour**)'],
  ['Sickle cell trait or disease','Papillary necrosis','**Painless gross hematuria**, can not concentrate urine'],
  ['Wilms tumour','Kidney tumour, 2 to 5 years','**Smooth flank mass that does not cross the midline**, hematuria, high BP. Do not keep palpating']]}],
 k:[['Isolated microscopic hematuria, well child','Repeat the urinalysis 2 or 3 times over weeks before any workup. Most is transient'],['Gross hematuria','Always gets a urinalysis with microscopy, culture, creatinine and a **renal ultrasound**']]},
{id:'aki',t:'Acute kidney injury and HUS',q:'Dry, damaged or blocked?',cmp:{h:['Hemolytic uremic syndrome','IgA vasculitis (HSP)','DIC','ITP'],t:['b','a','c','d'],r:[
 ['Trigger','**Bloody diarrhea 5 to 10 days earlier** (Shiga toxin E. coli O157:H7: undercooked beef, petting zoo)','Recent cold','Sepsis, trauma','Viral illness 1 to 4 weeks earlier'],
 ['Platelets','**Low**','**Normal**','Low','**Low, alone**'],
 ['Hemoglobin and smear','**Anemia with schistocytes**','Normal','Schistocytes','Normal'],
 ['PT and PTT','**Normal**','Normal','**Prolonged**, low fibrinogen','Normal'],
 ['Kidney','**Creatinine up, low urine, high BP**','Hematuria, sometimes nephritis','Variable','Normal'],
 ['Child looks','**Pale, tired, puffy**, petechiae, under 5 years','Well, purpura on legs and buttocks, sore joints and belly','Very sick, bleeding from lines','**Well**, petechiae and bruises only'],
 ['Treatment','**Supportive**: fluids, transfuse if needed, dialysis. **No antibiotics, no antimotility drugs**, avoid platelets unless bleeding','Supportive, NSAIDs for joints','Treat the cause','Observe if skin only. IVIG or steroids if bleeding']]},
 g:[
 {h:'Prerenal (dry)',c:'a',r:'**Most common** in kids. Kidney is fine, flow is low.',x:[
  ['Dehydration, bleeding, sepsis','FeNa **under 1%**, urine sodium under 20, **concentrated urine**, bland sediment','Vomiting and diarrhea, dry mouth, tachycardia. **Fluid bolus fixes the creatinine**'],
  ['NSAIDs in a dehydrated child','Blocks prostaglandins that keep the afferent arteriole open','Gastro plus **ibuprofen for fever**, then creatinine jumps. Stop the NSAID, give fluids'],
  ['Heart failure, nephrotic syndrome','Low effective volume','Swollen but underfilled']]},
 {h:'Intrinsic (damaged)',c:'b',r:'FeNa **over 2%**, urine not concentrated. The sediment names the cause.',x:[
  ['Acute tubular necrosis','**Muddy brown granular casts**','After prolonged shock, **aminoglycosides, vancomycin, amphotericin, contrast, cisplatin**'],
  ['Rhabdomyolysis','Myoglobin plugs the tubules','Crush injury, seizure, hard exercise in heat. **Dipstick blood positive, no red cells**, very high CK. Aggressive IV fluids'],
  ['Acute interstitial nephritis','**White cell casts**, urine eosinophils','**Fever, rash, eosinophilia** days to weeks after a new drug: penicillins, cephalosporins, NSAIDs, sulfa. Stop the drug'],
  ['Glomerulonephritis','**Red cell casts**','See the nephritic sheet'],
  ['Hemolytic uremic syndrome','Shiga toxin injures endothelium, platelets clump, red cells shear','**Anemia with schistocytes, low platelets, kidney injury** after bloody diarrhea. Most common cause of intrinsic kidney injury in young kids'],
  ['Tumour lysis syndrome','Uric acid and phosphate crystals','Starting chemo for leukemia or Burkitt: **high potassium, phosphate and uric acid, low calcium**. Fluids, allopurinol or rasburicase']]},
 {h:'Postrenal (blocked)',c:'c',r:'**Ultrasound**: hydronephrosis, big bladder.',x:[
  ['Posterior urethral valves','Boys only','Newborn boy, poor stream, palpable bladder. **Catheter** first'],
  ['Stone or tumour in a single kidney, neurogenic bladder','Obstruction','Spina bifida, pelvic mass']]},
 {h:'Newborn kidney',c:'d',r:'',x:[
  ['Renal vein thrombosis','Clot in a sludgy newborn','**Infant of a diabetic mother**, dehydration or polycythemia: **flank mass, gross hematuria, low platelets**'],
  ['Renal artery thrombosis','After an **umbilical artery catheter**','Preterm baby with new **hypertension**'],
  ['Normal newborn','First void can take up to 24 hours','Creatinine in the first days reflects the mother']]},
 {h:'Chronic kidney disease',c:'c',r:'Under 5: born with it (dysplasia, obstruction, reflux). Older: glomerular (FSGS).',x:[
  ['Growth failure','Acidosis, poor intake, growth hormone resistance','Short child. Fix nutrition and acidosis, then **growth hormone**'],
  ['Renal osteodystrophy','**High phosphate, low calcium, low active vitamin D, high PTH**','Bone pain, rickets-like changes. Phosphate binders, calcitriol'],
  ['Anemia','Low erythropoietin','**Normocytic**. Iron, then erythropoietin'],
  ['High potassium, acidosis, hypertension','Failing excretion','Bicarbonate, low potassium diet, ACE inhibitor for proteinuria']]}],
 k:[['Dialysis now (AEIOU)','**A**cidosis, **E**lectrolytes (potassium not responding), **I**ngestion (lithium, salicylate, methanol, ethylene glycol), **O**verload (fluid), **U**remia (pericarditis, encephalopathy)'],['HUS vs TTP','TTP adds **fever and neurologic signs**, low ADAMTS13, older patient. Plasma exchange'],['HUS without diarrhea','Strep pneumoniae (after pneumonia) or complement mediated (atypical, recurs, eculizumab)'],['Bloody diarrhea in a child','**Do not give antibiotics or loperamide** until Shiga toxin is excluded']]},
{id:'uti',t:'UTI and urinary anomalies',q:'Fever plus urine, or a baby with swollen kidneys on the prenatal scan?',g:[
 {h:'UTI: diagnose',c:'a',r:'Fever with no source in a child under 2: check the urine.',x:[
  ['Who gets it','Bacteria climb up','**Uncircumcised boys in the first year**, girls after that. **Constipation** and holding urine in toilet-trained kids'],
  ['How to collect','Not toilet trained','**Catheter or suprapubic sample**. A bag is only useful if it is **negative**. Toilet trained: midstream'],
  ['What counts','Needs both','**Pyuria** (leukocyte esterase or white cells) AND a single organism: **50,000 CFU/mL** or more on a catheter sample'],
  ['Organisms','**E. coli** by far','**Proteus**: alkaline urine, struvite stones. **Staph saprophyticus**: sexually active teen. Enterococcus and Staph saprophyticus are **nitrite negative**']]},
 {h:'UTI: treat and image',c:'b',r:'Febrile UTI in a young child = pyelonephritis.',x:[
  ['Antibiotics','7 to 10 days if febrile','**Under 2 to 3 months, toxic or vomiting: admit, IV** (ampicillin plus gentamicin, or a third generation cephalosporin). Otherwise oral (cefixime, amoxicillin-clavulanate). Cystitis in an older child: 2 to 4 days'],
  ['Renal and bladder ultrasound','Looks for hydronephrosis and anatomy','**After the first febrile UTI under 2 years**'],
  ['VCUG','Shows reflux and the urethra','**Abnormal ultrasound, or a second febrile UTI**. Not after an uncomplicated first one'],
  ['DMSA scan','Shows **scars**','Later, if recurrent pyelonephritis']]},
 {h:'Reflux and obstruction',c:'c',r:'**Prenatal hydronephrosis**: ultrasound after birth.',x:[
  ['Vesicoureteral reflux','Short ureter tunnel in the bladder wall. Grades I to V','Recurrent febrile UTIs. **Low grades resolve with age**. High grade (IV to V): antibiotic prophylaxis, sometimes surgery. Risk: **scarring, hypertension, kidney failure**'],
  ['Ureteropelvic junction obstruction','**Most common cause of prenatal hydronephrosis that needs surgery**','Older child with **flank pain after a large drink**, or hematuria after minor trauma. Dilated pelvis, normal ureter'],
  ['Posterior urethral valves','Membrane in the male urethra. **Most common bladder outlet obstruction in boys**','Prenatal: **bilateral hydronephrosis, thick big bladder, oligohydramnios**. After birth: weak stream, palpable bladder. **Catheterize**, VCUG confirms, valve ablation'],
  ['Ectopic ureter','Ureter opens below the sphincter','Girl who is **always damp** but also voids normally'],
  ['Prune belly syndrome','Absent abdominal wall muscle','Boy with wrinkled belly, **undescended testes**, dilated urinary tract']]},
 {h:'Malformed kidneys',c:'d',r:'',x:[
  ['Multicystic dysplastic kidney','One kidney is a bag of cysts, **no function**','**Flank mass in a newborn**. Shrinks on its own. Check the other side for reflux'],
  ['Autosomal recessive polycystic kidney disease','Collecting duct cysts, **liver fibrosis**','Newborn with **huge bright kidneys on both sides**, oligohydramnios, Potter sequence. Later portal hypertension'],
  ['Autosomal dominant polycystic kidney disease','Adult type, can show in teens','Parent on dialysis, hypertension, hematuria, **berry aneurysms**, liver cysts'],
  ['Potter sequence','**No amniotic fluid** from any cause (bilateral agenesis, valves, ARPKD)','Flat face, low ears, club feet, **pulmonary hypoplasia** is what kills'],
  ['Horseshoe kidney','Fused lower poles, stuck under the inferior mesenteric artery','**Turner syndrome**. Stones, UPJ obstruction, higher Wilms risk'],
  ['Single kidney','Unilateral agenesis','Often with **uterine anomalies** in girls and a single umbilical artery. Check BP and urine yearly']]},
 {h:'Wetting',c:'a',r:'',x:[
  ['Primary nocturnal enuresis','Never dry at night. Normal until **5 years**, runs in families','**Urinalysis first**. Reassure, less fluid in the evening. **Alarm** works best long term. **Desmopressin** is fast but relapses (limit evening fluids: hyponatremia)'],
  ['Secondary enuresis','Dry for 6 months, then wet again','Look for a cause: **UTI, diabetes, constipation, stress or abuse, sleep apnea**'],
  ['Daytime wetting','Bladder and bowel dysfunction','Holding postures, **constipation**. Timed voids, treat the constipation']]}],
 k:[['Newborn abdominal mass','Most are kidney: **hydronephrosis or multicystic dysplastic kidney**. Ultrasound'],['Flank mass, age 2 to 5','Wilms (smooth, one side, well child) vs neuroblastoma (**crosses the midline**, sick child, raccoon eyes, opsoclonus)'],['No VCUG needed','First febrile UTI with a normal ultrasound and good response']]},
{id:'lytes',t:'Hypertension, tubules and electrolytes',q:'High BP: is it the kidney? Acidosis: is the gap normal? Low potassium: is the BP high?',cmp:{h:['Type 1 (distal)','Type 2 (proximal)','Type 4'],t:['b','a','c'],r:[
 ['Defect','Can not **secrete H+** in the collecting duct','Can not **reabsorb bicarbonate** in the proximal tubule','**Low aldosterone** or resistance to it'],
 ['Urine pH','**Over 5.5** always','Under 5.5 once the blood bicarbonate is low','Under 5.5'],
 ['Potassium','Low','Low','**High**'],
 ['Clue','**Kidney stones and nephrocalcinosis**, growth failure, some with deafness','**Fanconi syndrome**: glucose, phosphate and amino acids in the urine, **rickets**. Cystinosis','**Obstructive uropathy**, congenital adrenal hyperplasia, trimethoprim, ACE inhibitors'],
 ['Treatment','Bicarbonate or citrate','Large doses of bicarbonate, phosphate, vitamin D','Treat the cause, fludrocortisone, lower the potassium']]},
 g:[
 {h:'Hypertension in kids',c:'b',r:'BP at or above the **95th percentile** for age, sex and height on **3 visits**. **Right cuff size** (too small reads high). The younger the child and the higher the BP, the more likely a cause.',x:[
  ['Newborn','Renal artery clot, coarctation','**Umbilical artery catheter**, bronchopulmonary dysplasia'],
  ['Renal parenchymal','**Most common cause in young kids**','Past UTIs with scarring, glomerulonephritis, polycystic kidneys. Abnormal urine or creatinine'],
  ['Renovascular','Renal artery stenosis: **fibromuscular dysplasia**, neurofibromatosis 1, Williams syndrome','Severe hypertension, **abdominal bruit**, low potassium, high renin'],
  ['Coarctation','Narrow aorta','**Arm BP higher than leg**, weak delayed femoral pulses. Turner syndrome'],
  ['Endocrine','Catecholamines or mineralocorticoid','**Pheochromocytoma**: episodic headache, sweating, palpitations (**alpha-block first**, then beta). Cushing. CAH from **11-beta-hydroxylase** deficiency: high BP plus virilization'],
  ['Teen','**Primary**, obesity, drugs','Family history, high BMI. **OCPs**, stimulants, steroids, decongestants, cocaine'],
  ['Workup','First round for everyone','Urinalysis, creatinine, electrolytes, **renal ultrasound**, echo for LVH. Four-limb BP']]},
 {h:'Normal anion gap acidosis',c:'a',r:'Infant with **failure to thrive, vomiting and a normal gap acidosis** = renal tubular acidosis (table above).',x:[
  ['Diarrhea','Loses bicarbonate in the stool','Most common cause. **Urine anion gap negative** (kidney is making ammonium). In RTA it is positive'],
  ['Fanconi syndrome','Whole proximal tubule fails','Polyuria, growth failure, **rickets with normal vitamin D**, glucose in the urine with normal blood sugar. **Cystinosis** (corneal crystals), ifosfamide, Wilson disease']]},
 {h:'Low potassium with alkalosis',c:'c',r:'Check the **BP** and the **urine chloride**.',x:[
  ['Vomiting','Loses acid and chloride','**Urine chloride low**. Pyloric stenosis, bulimia. Fix with saline'],
  ['Bartter syndrome','Thick ascending limb. Acts like a **loop diuretic**','Infant: **polyhydramnios**, polyuria, failure to thrive, **high urine calcium**, normal BP'],
  ['Gitelman syndrome','Distal tubule. Acts like a **thiazide**','Teen with cramps, **low magnesium, low urine calcium**, normal BP'],
  ['Liddle syndrome','Sodium channel stuck open','**High BP**, low potassium, **low renin and low aldosterone**. Amiloride'],
  ['Hyperaldosteronism, renal artery stenosis','Real aldosterone excess','High BP, low potassium. Renin low (primary) or high (renovascular)']]},
 {h:'Sodium and water',c:'b',r:'Correct sodium **slowly**: no more than about 10 to 12 mmol/L per day.',x:[
  ['Water intoxication','Infant can not dump free water','Under 6 months, given **water or diluted formula**: hyponatremic **seizure**, low temperature. **3% saline**'],
  ['SIADH','Too much ADH. Euvolemic, **urine concentrated while the blood is dilute**','Meningitis, pneumonia, after surgery, carbamazepine. **Fluid restrict**'],
  ['Hypernatremic dehydration','More water lost than salt','Breastfed newborn not feeding well, or diarrhea: **irritable, high-pitched cry, doughy skin**. Lower it slowly or the brain swells (**cerebral edema**)'],
  ['Hyponatremia fixed too fast','Water leaves brain cells','**Osmotic demyelination**'],
  ['Diabetes insipidus','Central: no ADH. Nephrogenic: kidney ignores it (X-linked, lithium)','Polyuria, thirst, **high sodium, dilute urine**. Infant boy with fevers and poor growth. **Desmopressin** fixes central only'],
  ['IV fluids','Bolus then maintenance','Shock or severe dehydration: **20 mL/kg normal saline**. Maintenance **4-2-1 rule** with an **isotonic** fluid plus dextrose']]},
 {h:'Potassium and calcium',c:'d',r:'',x:[
  ['Hyperkalemia','Kidney injury, CAH, tumour lysis, hemolyzed heel-stick sample (false)','**Peaked T waves**, wide QRS. **Calcium gluconate first** (protects the heart), then insulin with glucose, salbutamol. Remove with furosemide, resin or dialysis'],
  ['Congenital adrenal hyperplasia','Salt wasting, 21-hydroxylase','**Low sodium, high potassium**, shock at 1 to 2 weeks'],
  ['Hypokalemia','Vomiting, diuretics, diarrhea, RTA','Weakness, ileus, **U waves**. Fix magnesium too'],
  ['Severe hypocalcemia','Tetany, seizure, long QT','**IV calcium gluconate**. DiGeorge, transfusions, tumour lysis']]}],
 k:[['High BP plus low potassium','Renin high: renal artery stenosis. Renin and aldosterone both low: Liddle or licorice. Aldosterone high, renin low: primary hyperaldosteronism'],['Bartter vs Gitelman','Bartter = loop diuretic, baby, high urine calcium. Gitelman = thiazide, teen, low magnesium and low urine calcium'],['Cystinosis vs cystinuria','Cystinosis: Fanconi syndrome, kidney failure. Cystinuria: **stones** with hexagonal crystals']]},
{id:'male',t:'Male genitourinary',q:'Painful scrotum or painless lump?',g:[
 {h:'Painful scrotum',c:'b',r:'Torsion until proven otherwise.',x:[
  ['Testicular torsion','Bell clapper deformity. Teens and newborns','**Sudden severe pain, high-riding horizontal testis, no cremasteric reflex**, vomiting. **Straight to OR** (do not wait for ultrasound if classic). Best salvage under 6 hours. Fix the other side too'],
  ['Torsion of the appendix testis','Small appendage, age 7 to 12','**Blue dot sign**, pain at the upper pole, reflex present. Rest, NSAIDs'],
  ['Epididymitis','Sexually active teen: chlamydia or gonorrhea. Young boy: think urinary anomaly','Gradual pain, **Prehn sign** (lifting helps), reflex present, pyuria'],
  ['Incarcerated inguinal hernia','Bowel stuck in the canal','Irritable infant, **firm tender groin or scrotal bulge**, vomiting. Reduce, then repair'],
  ['IgA vasculitis','Vasculitis of the scrotum','Scrotal pain and swelling **with purpura on the legs**']]},
 {h:'Painless',c:'a',r:'',x:[
  ['Hydrocele','Fluid, patent processus vaginalis','**Transilluminates**. Gone by 1 year. Repair if it persists or changes size through the day (communicating)'],
  ['Inguinal hernia','Bowel in the canal. Preterm boys','Bulge with crying, does not transilluminate. **Repair soon** (incarceration)'],
  ['Undescended testis','Cryptorchidism','**Orchiopexy by 6 to 12 months**. Lowers torsion and infertility risk. Cancer risk stays but the testis is easier to examine'],
  ['Retractile testis','Brisk cremasteric reflex','Can be **brought down and stays** in the scrotum. Reassure'],
  ['Testicular tumour','Solid mass','**Painless, firm, does not transilluminate**. Yolk sac tumour in young boys (high AFP)'],
  ['Varicocele','Left side','**Bag of worms**, worse standing. Right-sided or does not empty lying down: look for an abdominal mass']]},
 {h:'Penis and foreskin',c:'c',r:'',x:[
  ['Hypospadias','Opening on the underside','**Do not circumcise** (foreskin is used for repair). With undescended testes: check for a **disorder of sex development**'],
  ['Physiologic phimosis','Foreskin does not retract','Normal in young boys. **Do not force it**'],
  ['Paraphimosis','Retracted foreskin stuck behind the glans','Swollen painful glans. **Emergency**: reduce now'],
  ['Both testes impalpable in a newborn','Could be a virilized girl','**Congenital adrenal hyperplasia** until excluded: karyotype, 17-hydroxyprogesterone, electrolytes']]}]}
]},
{id:'endo',al:'endocrine endo hormones metabolism',name:'Endocrine',sheets:[
{id:'short',t:'Short stature',q:'Compare bone age to real age. Is height velocity normal?',g:[
 {h:'Normal variants (normal velocity)',c:'d',r:'',x:[
  ['Constitutional delay','Late bloomer','**Bone age less than real age**, parent was a late bloomer, late puberty, reaches normal adult height. Reassure'],
  ['Familial short stature','Short parents','**Bone age equals real age**, normal puberty, short adult like parents']]},
 {h:'Pathologic (falling off the curve)',c:'b',r:'Height falls across percentiles. Weight tells you which.',x:[
  ['Endocrine (weight kept, height falls)','Hypothyroid, GH deficiency, Cushing','**Chubby short kid**. TSH, IGF-1. Bone age delayed'],
  ['Nutritional or systemic (weight falls first)','Celiac, IBD, CF, kidney disease','Thin short kid. Anti-tTG, ESR'],
  ['Turner syndrome','45,X','**Any short girl gets a karyotype**. Webbed neck, coarctation, no puberty'],
  ['Advanced bone age','Obesity, precocious puberty, CAH','Tall now, short adult']]}]},
{id:'puberty',t:'Puberty, amenorrhea and ambiguous genitalia',q:'',g:[
 {h:'Primary amenorrhea',c:'a',r:'Is there a uterus?',x:[
  ['Uterus present, high FSH','Ovarian failure','**Turner**. Karyotype. If Y material: remove gonads'],
  ['Uterus present, low FSH','Hypothalamic','Athlete, anorexia, **Kallmann (no smell)**, constitutional delay'],
  ['Uterus absent, 46,XX','Mullerian agenesis','Normal breasts and pubic hair, short vagina'],
  ['Uterus absent, 46,XY','**Androgen insensitivity**','Breasts but **no pubic or axillary hair**, inguinal masses (testes). Remove testes after puberty'],
  ['Imperforate hymen','Outflow block','**Bulging bluish membrane**, cyclic pain']]},
 {h:'Congenital adrenal hyperplasia',c:'b',r:'Cortisol pathway blocked. Look at BP and genitals.',x:[
  ['21-hydroxylase (most common)','High **17-hydroxyprogesterone**','Girl: **ambiguous genitalia**. Boy: **salt-wasting crisis at 1 to 2 weeks** (low Na, high K, shock). Hydrocortisone plus fludrocortisone'],
  ['11-beta-hydroxylase','Extra deoxycorticosterone','Virilized plus **hypertension**, low K'],
  ['17-alpha-hydroxylase','No sex steroids','**Hypertension**, undervirilized boy, girl with no puberty']]},
 {h:'Early or late puberty',c:'c',r:'',x:[
  ['Precocious puberty','Girl under 8, boy under 9','Bone age advanced. Check LH: high = central (MRI, boys especially), low = peripheral (adrenal, ovary, **McCune-Albright**)'],
  ['Newborn breast buds or vaginal bleeding','Maternal hormones','Reassure']]}]},
{id:'glucose',t:'Glucose, thyroid and calcium',q:'',g:[
 {h:'Glucose',c:'b',r:'',x:[
  ['Diabetic ketoacidosis','Insulin deficiency','**Kussmaul breathing**, vomiting, belly pain, fruity breath. **Fluids first, then insulin, add potassium**. Watch for **cerebral edema** (headache, bradycardia)'],
  ['Infant of a diabetic mother','Fetal hyperinsulinism','**Macrosomia, hypoglycemia** at birth, polycythemia, low calcium, RDS, **small left colon, caudal regression**, TGA'],
  ['Neonatal hypoglycemia, persistent','Hyperinsulinism, Beckwith-Wiedemann, inborn error','Jittery, seizures. Big tongue, omphalocele = Beckwith-Wiedemann']]},
 {h:'Thyroid',c:'a',r:'',x:[
  ['Congenital hypothyroidism','Dysgenesis','**Big tongue, umbilical hernia, prolonged jaundice, constipation, hoarse cry, large fontanelle**. Newborn screen, levothyroxine fast'],
  ['Neonatal Graves','Maternal antibodies cross','Tachycardia, irritability, goitre in baby of mom with Graves']]},
 {h:'Calcium and bone',c:'c',r:'',x:[
  ['Hypocalcemia','DiGeorge, infant of a diabetic mother, transfusion','Tetany, seizures. IV calcium gluconate'],
  ['Rickets','Vitamin D deficiency','Exclusively breastfed, dark skin, no vitamin D. **Bowed legs, rachitic rosary, wide wrists**. Low phosphate, high ALP']]}]}
]},
{id:'neuro',al:'neurology neuro brain nervous',name:'Neurology',sheets:[
{id:'seizure',t:'Seizures and spells',q:'Fever? Age? What happened after?',g:[
 {h:'With fever',c:'b',r:'',x:[
  ['Simple febrile seizure','6 months to 5 years','Generalized, **under 15 minutes, once in 24 hours**, back to normal. **No workup**, reassure. Antipyretics do not prevent'],
  ['Complex febrile seizure','Focal, long or repeated','Look for meningitis. LP if signs or not vaccinated'],
  ['Meningitis or encephalitis','Infection','Stiff neck, bulging fontanelle. HSV: **temporal lobe, focal seizures**, acyclovir']]},
 {h:'Epilepsy syndromes',c:'a',r:'',x:[
  ['Infantile spasms (West)','Flexion jerks in clusters','**Tuberous sclerosis**, regression. EEG **hypsarrhythmia**. **ACTH or vigabatrin**'],
  ['Absence','3 Hz spike and wave','School kid **staring many times a day**, no postictal, provoked by **hyperventilation**. Ethosuximide'],
  ['Juvenile myoclonic','Teen','Morning jerks, drops things. Valproate or levetiracetam']]},
 {h:'Not seizures',c:'d',r:'',x:[
  ['Breath-holding spell','Crying then blue','Angry toddler, brief. Reassure, **check iron**'],
  ['Syncope','No postictal','Prodrome, quick recovery'],
  ['Sleep terror','Non-REM','Screaming, inconsolable, **no memory** next day. Reassure'],
  ['Nightmare','REM','**Remembers** the dream, easy to comfort']]}]},
{id:'floppy',t:'The floppy or weak child',q:'Floppy since birth, or was well then got weak?',g:[
 {h:'Floppy from birth',c:'a',r:'',x:[
  ['Spinal muscular atrophy','Anterior horn cell (SMN1)','**Floppy, tongue fasciculations, no reflexes**, alert face, frog legs'],
  ['Prader-Willi','Paternal 15q deletion','Floppy and poor feeding at birth, then **obesity, hyperphagia** later'],
  ['Congenital hypothyroidism, Down syndrome','Central or metabolic','Look for the other features'],
  ['Myotonic dystrophy','Mother affected','Floppy baby, mom **can not let go of a handshake**']]},
 {h:'Was well, then weak',c:'b',r:'',x:[
  ['Infant botulism','Spores (**honey**, soil)','**Constipation first**, then **descending** weakness, poor suck, **dilated pupils, ptosis**. Stool toxin, **BabyBIG**'],
  ['Guillain-Barre','After Campylobacter or virus','**Ascending** weakness, **lost reflexes**. CSF high protein normal cells. **Check vital capacity**, IVIG'],
  ['Tick paralysis','Tick toxin','Ascending weakness, find and **remove the tick**'],
  ['Duchenne','No dystrophin, X-linked','Boy 3 to 5, **Gowers sign, calf pseudohypertrophy**, high CK. Becker is milder, later'],
  ['Myasthenia gravis','Antibodies to receptor','Ptosis, worse at the end of the day']]},
 {h:'Static motor problem',c:'c',r:'',x:[
  ['Cerebral palsy','**Non-progressive** brain injury','Preemie, spasticity, **scissoring**, toe walking. Early hand preference is a red flag']]}]},
{id:'head',t:'Head, raised pressure and neurocutaneous',q:'',g:[
 {h:'Raised ICP',c:'b',r:'',x:[
  ['Raised ICP','Tumour, bleed, hydrocephalus','Morning headache with vomiting, papilledema, **Cushing triad**. **CT before LP** (except open fontanelle). Head up, hyperventilate, mannitol'],
  ['Migraine','Primary','Throbbing, photophobia, family history. Acetaminophen or ibuprofen, then triptan']]},
 {h:'Malformations',c:'a',r:'',x:[
  ['Chiari II','Hindbrain down','**Lumbosacral myelomeningocele**, hydrocephalus'],
  ['Dandy-Walker','Absent vermis','**Big fourth ventricle**, hydrocephalus'],
  ['Neural tube defects','Folate','High maternal AFP. Folate before conception']]},
 {h:'Neurocutaneous',c:'c',r:'',x:[
  ['Neurofibromatosis 1','Chromosome 17','**Cafe au lait spots, axillary freckling, Lisch nodules**, neurofibromas, optic glioma'],
  ['Tuberous sclerosis','TSC1 and 2','**Ash leaf spots**, shagreen patch, infantile spasms, **cardiac rhabdomyoma**, renal angiomyolipoma'],
  ['Sturge-Weber','Not inherited','**Port wine stain on the face (V1)**, seizures, glaucoma']]}]}
]},
{id:'heme',al:'hematology oncology heme onc blood cancer',name:'Hematology and oncology',sheets:[
{id:'anemia',t:'Anemia in a child',q:'Look at the MCV and the retic count.',g:[
 {h:'Microcytic',c:'b',r:'',x:[
  ['Iron deficiency','Most common','Toddler drinking **lots of cow milk**, pale, pica. **High RDW**, low ferritin. Iron trial'],
  ['Thalassemia trait','Globin chain','**Very low MCV, normal RDW**, target cells, Mentzer index under 13. Mediterranean or Asian'],
  ['Lead poisoning','Old house, pica','**Basophilic stippling**, belly pain, developmental delay. Succimer (oral) or EDTA if high']]},
 {h:'Normocytic',c:'a',r:'Retic tells you making vs losing.',x:[
  ['Transient erythroblastopenia of childhood','Viral suppression','Well toddler, **low retics**, recovers alone. Normal MCV'],
  ['Diamond-Blackfan','Red cell aplasia','Infant, **triphalangeal thumbs**, macrocytic, low retics'],
  ['Hemolysis','Spherocytosis, G6PD, sickle','**High retics**, jaundice, splenomegaly. G6PD: after **fava beans or sulfa**, bite cells. Spherocytosis: osmotic fragility, splenectomy']]},
 {h:'Macrocytic',c:'c',r:'',x:[
  ['Folate deficiency','Goat milk','**Goat milk** fed infant'],
  ['B12 deficiency','Vegan mother','Breastfed baby of a vegan mother, delay'],
  ['Fanconi anemia','Pancytopenia','**Absent thumbs and radii**, cafe au lait, short']]}]},
{id:'bleed',t:'Bruising and bleeding',q:'Platelets, PT and PTT.',g:[
 {h:'Low platelets',c:'b',r:'',x:[
  ['Immune thrombocytopenia','Antibodies after a virus','**Well child with petechiae 2 to 4 weeks after a cold**, only platelets low. Observe, IVIG or steroids if bleeding'],
  ['Hemolytic uremic syndrome','Shiga toxin','After bloody diarrhea, schistocytes, kidney injury. **No platelet transfusion**'],
  ['Wiskott-Aldrich','X-linked','**Eczema, small platelets, infections**, bleeding at circumcision'],
  ['Leukemia','Marrow replaced','Bruises plus **bone pain, fever, other low counts**']]},
 {h:'Normal platelets',c:'a',r:'',x:[
  ['Von Willebrand disease','Most common inherited','**Nosebleeds, heavy periods**, long bleeding time, maybe long PTT. Desmopressin'],
  ['Hemophilia A and B','Factor 8 or 9, X-linked boys','**Joint bleeds**, bleed after circumcision. **Long PTT that corrects with mixing**'],
  ['Vitamin K deficiency','No vitamin K at birth','**Home birth**, bleeding day 2 to 7, long PT then PTT'],
  ['IgA vasculitis (HSP)','Vessel wall','Purpura on buttocks with **normal platelets**'],
  ['Child abuse','Pattern','Bruises in odd places, story does not fit']]}]},
{id:'sickle',t:'Sickle cell disease',q:'What complication, what fix?',g:[
 {h:'Infection',c:'b',r:'Autosplenectomy by 5 (Howell-Jolly bodies).',x:[
  ['Fever','Encapsulated bugs, **strep pneumo**','Any fever 38.5: blood culture and **IV ceftriaxone**. Prevent with **penicillin until 5**, vaccines'],
  ['Osteomyelitis','**Salmonella**','Bone pain plus fever']]},
 {h:'Vaso-occlusion',c:'a',r:'',x:[
  ['Dactylitis','First crisis','**Swollen hands and feet at 6 to 12 months**'],
  ['Acute chest syndrome','Infarct or infection','Fever, chest pain, new infiltrate, hypoxia. O2, antibiotics, **exchange transfusion**'],
  ['Stroke','Infarct','**Exchange transfusion**, not tPA. Screen with **transcranial Doppler**'],
  ['Priapism','','Urology, fluids']]},
 {h:'Anemia crises',c:'c',r:'',x:[
  ['Aplastic crisis','**Parvovirus B19**','Sudden pallor, **low retics**. Transfuse'],
  ['Splenic sequestration','Spleen traps blood','**Big spleen, sudden pallor, shock**, high retics. Transfuse']]}]},
{id:'cancer',t:'Childhood cancer clues',q:'Where is the mass and what else is going on?',g:[
 {h:'Abdominal mass',c:'b',r:'',x:[
  ['Wilms tumour','Kidney','**Healthy kid, smooth mass, does not cross midline**, hematuria, HTN. WAGR, Beckwith-Wiedemann'],
  ['Neuroblastoma','Adrenal or sympathetic chain','Under 2, **crosses midline**, ill, **opsoclonus-myoclonus (dancing eyes)**, raccoon eyes, **urine HVA and VMA**. Posterior mediastinal mass']]},
 {h:'Blood and nodes',c:'a',r:'',x:[
  ['ALL','Most common childhood cancer','2 to 5, **bone pain, pallor, petechiae, fever**, HSM. Down syndrome. Marrow biopsy. Watch for tumour lysis'],
  ['Hodgkin lymphoma','Reed-Sternberg','Teen, **painless neck nodes**, night sweats. Excisional biopsy'],
  ['Non-Hodgkin lymphoma','T-cell','**Anterior mediastinal mass**, airway compression']]},
 {h:'Bone, eye, brain',c:'c',r:'',x:[
  ['Osteosarcoma','Metaphysis around knee','Teen with **night bone pain**, **sunburst, Codman triangle**'],
  ['Ewing sarcoma','Diaphysis, pelvis','Fever, **onion skin**, t(11;22)'],
  ['Retinoblastoma','RB1','**Lost red reflex (leukocoria)**, strabismus. Later osteosarcoma'],
  ['Brain tumours','Mostly infratentorial','Medulloblastoma, astrocytoma: **ataxia, morning vomiting**. Craniopharyngioma: **bitemporal hemianopia**, calcified, short']]}]}
]},
{id:'id',al:'infectious disease id infection',name:'Infectious disease',sheets:[
{id:'fever',t:'Fever in a young infant and meningitis',q:'How old?',g:[
 {h:'Under 28 days',c:'b',r:'Any fever 38 = **full workup: blood, urine, LP**, admit.',x:[
  ['Neonatal sepsis','**GBS, E coli, Listeria**','**Ampicillin plus gentamicin** (or cefotaxime). HSV: add **acyclovir** if seizures, vesicles, high LFTs']]},
 {h:'Older infant and child',c:'a',r:'',x:[
  ['Bacterial meningitis','Strep pneumo, N meningitidis, H flu','Fever, stiff neck, petechiae (meningococcus). **Vancomycin plus ceftriaxone**. **Do not delay antibiotics for CT**. Contacts of meningococcus: **rifampin**'],
  ['CSF patterns','Bacterial: low glucose, neutrophils','Viral: normal glucose, lymphocytes. TB and fungal: low glucose, lymphocytes, high protein']]}]},
{id:'rash',t:'Fever and rash',q:'Where did the rash start and what came first?',g:[
 {h:'Viral',c:'a',r:'',x:[
  ['Measles','Unvaccinated','**Cough, coryza, conjunctivitis**, **Koplik spots**, rash head down. **Vitamin A**. Late: SSPE'],
  ['Rubella','Mild','Rash head down, **posterior auricular nodes**, joint pain'],
  ['Roseola (HHV-6)','Under 2','**High fever 3 to 5 days, then rash when fever breaks**. Febrile seizure'],
  ['Fifth disease (parvovirus)','','**Slapped cheek**, lacy rash. Aplastic crisis in sickle cell, hydrops in fetus'],
  ['Hand foot mouth (Coxsackie A)','','Mouth ulcers plus palm and sole vesicles. Herpangina'],
  ['Varicella','','Crops in different stages, itchy. Exposed and immunosuppressed: **VZIG**']]},
 {h:'Bacterial and toxin',c:'b',r:'',x:[
  ['Scarlet fever','Group A strep','**Sandpaper rash**, strawberry tongue, **Pastia lines**. Penicillin'],
  ['Staph scalded skin','Exfoliative toxin','Infant, **Nikolsky sign**, mucosa spared. IV antistaph'],
  ['Toxic shock','S aureus or strep toxin','Tampon or nasal packing, shock, diffuse rash, **later peeling**'],
  ['Meningococcemia','N meningitidis','**Petechiae and purpura, rapidly ill**'],
  ['Rocky Mountain spotted fever','Tick','Rash **wrists and ankles moving inward**, palms and soles. **Doxycycline at any age**'],
  ['Lyme disease','Ixodes tick','**Erythema migrans**. Later Bell palsy, heart block, arthritis. **Amoxicillin under 8**, doxy otherwise']]},
 {h:'Not infection',c:'c',r:'',x:[
  ['Kawasaki','Vasculitis','Fever 5 days, conjunctivitis, lips, hands. See cardiology'],
  ['Systemic JIA','Autoinflammatory','**Daily fever spikes with salmon rash**, HSM']]}]},
{id:'torch',t:'TORCH infections',q:'Calcifications where? Eyes? Ears?',g:[
 {h:'TORCH',c:'a',r:'',x:[
  ['Toxoplasmosis','Cat feces, undercooked meat','**Chorioretinitis, hydrocephalus, diffuse calcifications**'],
  ['CMV','Most common','**Periventricular calcifications, microcephaly**, hearing loss, petechiae. Ganciclovir'],
  ['Rubella','Unvaccinated mom','**Cataracts, deafness, PDA**, blueberry muffin'],
  ['Syphilis','','**Snuffles**, palm and sole rash, later saddle nose, Hutchinson teeth. Penicillin'],
  ['HSV','Vaginal birth','Day 5 to 21, vesicles, seizures. Acyclovir'],
  ['Varicella','','**Limb hypoplasia, scars**. Mom gets chickenpox 5 days before to 2 days after birth: **VZIG** to baby']]}]},
{id:'ent',t:'Sore throat, ears and neck',q:'',g:[
 {h:'Throat',c:'b',r:'',x:[
  ['Strep pharyngitis','Group A strep','Sudden, fever, **no cough**, tender front nodes, palatal petechiae. Rapid strep, **culture if negative**. Penicillin **prevents rheumatic fever not PSGN**'],
  ['Mononucleosis','EBV','Teen, exudative pharyngitis, **posterior nodes**, splenomegaly, **rash after amoxicillin**. **No contact sports** until spleen normal'],
  ['Viral pharyngitis','','Cough, runny nose, conjunctivitis'],
  ['Diphtheria','Unvaccinated','**Grey membrane**, bull neck. Antitoxin']]},
 {h:'Ear',c:'a',r:'',x:[
  ['Acute otitis media','Strep pneumo, H flu, Moraxella','**Bulging, immobile TM** (red alone is not enough). **Amoxicillin**'],
  ['Otitis externa','Pseudomonas','Swimmer, **pain pulling the ear**. Topical cipro'],
  ['Otitis media with effusion','','Fluid, no symptoms. Watch. Tubes if hearing loss']]},
 {h:'Neck',c:'c',r:'',x:[
  ['Lymphadenitis','S aureus, GAS','Tender, warm node. Cephalexin'],
  ['Cat scratch','Bartonella','Node near a scratch. Azithromycin'],
  ['Mumps','Unvaccinated','**Bilateral parotitis**, orchitis, pancreatitis'],
  ['Thyroglossal duct cyst','Midline','**Moves up with tongue out**'],
  ['Branchial cleft cyst','Lateral','Front of SCM']]}]},
{id:'bonejoint',t:'Bone and joint infection',q:'',g:[
 {h:'',c:'b',r:'',x:[
  ['Septic arthritis','S aureus','Ill, febrile, **will not bear weight**, WBC over 50,000 in joint. **Arthrocentesis first**, then OR washout'],
  ['Transient synovitis','After a cold','**Walks with a limp**, low fever, joint WBC low. NSAIDs'],
  ['Osteomyelitis','S aureus','Sickle cell: **Salmonella**. **Nail through sneaker: Pseudomonas**. Neonate: GBS. MRI']]}]}
]},
{id:'immuno',al:'immunology allergy immuno',name:'Immunology and allergy',sheets:[
{id:'immdef',t:'Immunodeficiencies',q:'What kind of bug, and when did it start?',g:[
 {h:'B cell (after 6 months)',c:'a',r:'Recurrent **sinopulmonary** infections with encapsulated bacteria. Starts **after 6 months** when maternal IgG fades.',x:[
  ['Bruton agammaglobulinemia','X-linked, BTK','**Boy, no tonsils or nodes**, no B cells. **IVIG**. No live vaccines'],
  ['Selective IgA deficiency','Most common','Sinus, GI infections, celiac. **Anaphylaxis to blood products**'],
  ['CVID','Later onset','Teen or adult, low Ig, lymphoma risk']]},
 {h:'T cell or combined (early)',c:'b',r:'**FTT, thrush, PCP, chronic diarrhea** in the first months.',x:[
  ['SCID','No T, no B','**No thymus shadow**, severe infections early. Bone marrow transplant, PCP prophylaxis, IVIG'],
  ['DiGeorge','No thymus','Hypocalcemia, truncus, cleft'],
  ['Wiskott-Aldrich','X-linked','Eczema, small platelets, infections'],
  ['Ataxia telangiectasia','DNA repair','**Ataxia, spider veins on eyes**, low IgA, cancer']]},
 {h:'Phagocyte',c:'c',r:'Skin abscesses, deep infections.',x:[
  ['Chronic granulomatous disease','NADPH oxidase','**Catalase-positive** bugs (S aureus, Aspergillus, Serratia). **Abnormal nitroblue tetrazolium or DHR**. TMP-SMX prophylaxis'],
  ['Leukocyte adhesion deficiency','CD18','**Delayed cord separation**, no pus, high WBC'],
  ['Chediak-Higashi','Lysosome','**Albinism, giant granules**, neuropathy']]},
 {h:'Complement',c:'e',r:'',x:[
  ['C5 to C9','Membrane attack complex','**Recurrent Neisseria**'],
  ['C1 esterase inhibitor','Hereditary angioedema','**Swelling without hives**, after dental work']]}]},
{id:'allergy',t:'Allergy and food reactions',q:'IgE or not?',g:[
 {h:'IgE mediated (minutes)',c:'b',r:'',x:[
  ['Anaphylaxis','Food, sting, drug','Hives plus breathing or BP trouble. **IM epinephrine 0.01 mg/kg (1:1000) thigh** first. Observe'],
  ['Food allergy','Peanut, egg, milk','Hives and vomiting minutes after. Early peanut introduction prevents']]},
 {h:'Non-IgE (hours to days)',c:'a',r:'',x:[
  ['FPIES','Cow milk or soy','**Repetitive vomiting 1 to 4 hours later**, pale, lethargic. IV fluids'],
  ['Allergic proctocolitis','Cow milk','Well baby, **blood streaks**'],
  ['Eosinophilic esophagitis','','Food stuck, dysphagia, rings on scope']]}]}
]},
{id:'msk',al:'musculoskeletal msk rheumatology rheum ortho orthopedics bone',name:'Musculoskeletal and rheumatology',sheets:[
{id:'limp',t:'The limping child',q:'Age plus pain plus fever.',g:[
 {h:'By age',c:'a',r:'Most common cause at any age: **trauma**.',x:[
  ['Developmental dysplasia of the hip','Newborn','**Girl, firstborn, breech**. Barlow and Ortolani, uneven thigh folds. **Ultrasound under 4 to 6 months**, X-ray later. **Pavlik harness**'],
  ['Transient synovitis','3 to 8','After a cold, can bear weight. NSAIDs'],
  ['Legg-Calve-Perthes','4 to 8, boy','**Painless limp**, avascular femoral head. Observe, physio'],
  ['Slipped capital femoral epiphysis','Teen, **obese** or growth spurt','**Knee or thigh pain**, leg held externally rotated. **No weight bearing, surgical pinning**'],
  ['Osgood-Schlatter','Jumping teen','Pain at **tibial tuberosity**. Rest, ice']]},
 {h:'Red flags',c:'b',r:'',x:[
  ['Septic arthritis','','Fever, will not bear weight, tap first'],
  ['Leukemia','','Night pain, cytopenias'],
  ['Bone tumour','','Night pain, mass']]}]},
{id:'rheum',t:'Rheumatology',q:'',g:[
 {h:'',c:'a',r:'',x:[
  ['Systemic JIA','','**Daily double fever spikes, salmon rash**, HSM, serositis. Risk macrophage activation'],
  ['Oligoarticular JIA','Young girl, ANA positive','Swollen knee, **anterior uveitis**: regular eye exams'],
  ['Juvenile dermatomyositis','','**Heliotrope rash, Gottron papules**, proximal weakness, high CK'],
  ['Lupus','','Teen girl, malar rash, nephritis. Hydroxychloroquine'],
  ['IgA vasculitis (HSP)','','Buttock purpura, joints, belly, kidney']]}]},
{id:'ortho',t:'Fractures, elbows and abuse',q:'',g:[
 {h:'Injuries',c:'a',r:'',x:[
  ['Nursemaid elbow','Radial head subluxation','Pulled by the arm, holds arm **pronated**, will not use it. Reduce with **supination and flexion or hyperpronation**'],
  ['Supracondylar fracture','Fall on outstretched hand','**Compartment syndrome**, brachial artery and median nerve. Urgent'],
  ['Toddler fracture','Spiral tibia','Normal in a walking toddler'],
  ['Scoliosis','Teen girl','Forward bend test. **Brace 20 to 40 degrees, surgery over 40 to 50**'],
  ['Spondylolysis','Pars fracture','Gymnast with back pain worse arching']]},
 {h:'Abuse red flags',c:'b',r:'',x:[
  ['Abuse','Pattern does not match story','**Posterior rib, metaphyseal corner, spiral in non-walker**, retinal hemorrhages, burns with clean lines. **Skeletal survey**, admit to keep safe, report']]}]}
]},
{id:'derm',al:'dermatology derm skin rash',name:'Dermatology',sheets:[
{id:'newbornskin',t:'Newborn skin: reassure or act',q:'',g:[
 {h:'Reassure',c:'d',r:'',x:[
  ['Erythema toxicum','Day 2 to 3','Red blotches with pustules, **eosinophils**'],
  ['Transient neonatal pustular melanosis','Darker skin','Pustules at birth leaving brown spots, neutrophils'],
  ['Milia','Day 1','White dots on nose'],
  ['Mongolian spot','','**Slate grey on the back**. Document so it is not called abuse'],
  ['Salmon patch','','Pink on eyelids or nape'],
  ['Infantile hemangioma','Appears weeks after birth','Grows then **shrinks by 5 to 10**. Propranolol if near eye, airway, or ulcerated']]},
 {h:'Act',c:'b',r:'',x:[
  ['Port wine stain','Does not fade','Face V1: **Sturge-Weber**'],
  ['Nevus sebaceous','Hairless orange plaque','**Remove before puberty** (tumour risk)'],
  ['Many cafe au lait','6 or more','NF1'],
  ['Midline lumbar dimple with hair','','Spinal dysraphism, ultrasound']]}]},
{id:'rashes',t:'Common rashes',q:'',g:[
 {h:'Diaper area',c:'a',r:'',x:[
  ['Irritant diaper dermatitis','','**Spares the creases**. Zinc barrier'],
  ['Candida','','**Involves creases, satellite lesions**. Topical nystatin or azole']]},
 {h:'Itchy or scaly',c:'c',r:'',x:[
  ['Atopic dermatitis','','Infant cheeks, child flexures. Emollients, topical steroid'],
  ['Scabies','','**Night itch, finger webs**, family itchy. **Permethrin for the whole household**'],
  ['Tinea capitis','','Scaly patch, hair loss, nodes. **Oral griseofulvin or terbinafine**'],
  ['Pityriasis rosea','','**Herald patch** then Christmas tree'],
  ['Seborrheic dermatitis','','Cradle cap. Gentle shampoo']]},
 {h:'Infections',c:'b',r:'',x:[
  ['Impetigo','S aureus, GAS','**Honey crust**. Mupirocin'],
  ['Molluscum','Poxvirus','Pearly umbilicated papules. Leave alone'],
  ['Acne','','Topical retinoid or benzoyl peroxide, add antibiotic, **isotretinoin needs pregnancy test and 2 forms of contraception**']]}]}
]},
{id:'eye',al:'ophthalmology eye eyes ophtho vision',name:'Ophthalmology',sheets:[
{id:'eyes',t:'Eye findings',q:'',g:[
 {h:'Neonatal conjunctivitis by day',c:'a',r:'',x:[
  ['Chemical','Day 1','From prophylaxis drops'],
  ['Gonorrhea','**Day 2 to 5**','**Very purulent**, lid swelling, risk of perforation. IV or IM ceftriaxone'],
  ['Chlamydia','**Day 5 to 14**','Watery to mucoid. **Oral erythromycin** (also covers pneumonia)'],
  ['HSV','Week 2','Vesicles, keratitis. Acyclovir']]},
 {h:'Act now',c:'b',r:'',x:[
  ['Leukocoria','No red reflex','**Retinoblastoma**, cataract (galactosemia, rubella). Ophtho same week'],
  ['Orbital cellulitis','Spread from sinusitis','**Pain with eye movement, proptosis, double vision**. CT, IV antibiotics'],
  ['Periorbital cellulitis','In front of septum','Lid swelling, **eye moves normally**. Oral antibiotics'],
  ['Strabismus after 4 months','','Fix early or **amblyopia**']]},
 {h:'Reassure',c:'d',r:'',x:[
  ['Nasolacrimal duct obstruction','','Tearing, crust, white eye. Massage, opens by 1 year'],
  ['Viral conjunctivitis','Adenovirus','Back to school when discharge stops']]}]}
]},
{id:'newborn',al:'newborn neonatal neonate neonatology',name:'Newborn',sheets:[
{id:'delivery',t:'Delivery room and scalp',q:'',g:[
 {h:'Resuscitation',c:'b',r:'',x:[
  ['Apgar','Colour, HR, reflex, tone, breathing','**Does not predict outcome and does not guide resuscitation**. Acrocyanosis loses 1 point'],
  ['Steps','Warm, dry, stimulate','Not breathing or HR under 100: **ventilate**. HR under 60 after 30 s of good ventilation: **compressions**']]},
 {h:'Scalp swelling',c:'a',r:'',x:[
  ['Caput succedaneum','Scalp edema','At birth, **crosses suture lines**, gone in days'],
  ['Cephalohematoma','Subperiosteal blood','Appears hours later, **does not cross sutures**, jaundice risk'],
  ['Subgaleal hemorrhage','Under the galea','Boggy, **crosses sutures, spreads, can cause shock**. Vacuum delivery']]},
 {h:'Birth injury',c:'c',r:'',x:[
  ['Erb palsy (C5 to C6)','Shoulder dystocia','**Waiter tip**: arm adducted, internally rotated. Physio, surgery if not better by 3 to 6 months'],
  ['Klumpke (C8 to T1)','Arm up','Claw hand, maybe Horner'],
  ['Clavicle fracture','Big baby','Crepitus, asymmetric Moro. **No treatment**']]}]},
{id:'screen',t:'Newborn screen and feeding',q:'',g:[
 {h:'Metabolic',c:'b',r:'',x:[
  ['Galactosemia','Symptoms from first milk feeds','Vomiting, jaundice, **cataracts**, **E coli sepsis**. Stop breastfeeding, soy formula'],
  ['PKU','Normal at birth','Untreated: **musty odour, fair skin and hair**, delay. Low phenylalanine diet']]},
 {h:'Feeding',c:'a',r:'',x:[
  ['Weight','','Loses up to 10% in week 1, **back to birth weight by 2 weeks**. Doubles at 4 to 6 months, triples at 1 year'],
  ['Breastfeeding contraindications','','**HIV (in Canada), galactosemia, active untreated TB, chemo, illicit drugs**. Hep B and C are not'],
  ['Supplements','','Breastfed: **vitamin D 400 IU** daily. **No honey under 1** (botulism). No cow milk under 9 to 12 months']]}]}
]},
{id:'genetics',al:'genetics genetic metabolism syndromes',name:'Genetics and metabolism',sheets:[
{id:'syndromes',t:'Dysmorphic child',q:'',g:[
 {h:'Trisomies and sex chromosomes',c:'a',r:'',x:[
  ['Down (21)','','Flat face, single crease, **AV canal, duodenal atresia, Hirschsprung, hypothyroid, ALL, atlantoaxial instability**, early Alzheimer'],
  ['Edwards (18)','','**Clenched fists with overlapping fingers, rocker-bottom feet**, small jaw'],
  ['Patau (13)','','**Cleft lip, holoprosencephaly, polydactyly**, scalp defect'],
  ['Turner (45,X)','','Short, webbed neck, **coarctation, horseshoe kidney**, ovarian failure. Growth hormone, estrogen'],
  ['Klinefelter (47,XXY)','','**Tall, small firm testes, gynecomastia**, infertility']]},
 {h:'Deletions and imprinting',c:'c',r:'',x:[
  ['Prader-Willi','**Paternal 15q**','Floppy baby then **hyperphagia, obesity**, small hands'],
  ['Angelman','**Maternal 15q**','**Happy puppet**: laughing, seizures, ataxia'],
  ['Williams','7q','**Elfin face, very friendly**, supravalvular AS, hypercalcemia'],
  ['Cri du chat','5p','**Cat cry**, VSD'],
  ['Fragile X','CGG repeat','**Big ears, long face, large testes**, autism'],
  ['Fetal alcohol','','**Smooth philtrum, thin upper lip, small eyes**, VSD']]},
 {h:'Associations',c:'b',r:'',x:[
  ['VACTERL','','Vertebral, anal, cardiac, TE fistula, renal, limb'],
  ['CHARGE','','Coloboma, heart, **choanal atresia**, growth delay, genital, ear'],
  ['Beckwith-Wiedemann','','**Big tongue, omphalocele, hemihypertrophy, hypoglycemia**, Wilms risk']]}]},
{id:'iem',t:'Inborn errors of metabolism',q:'',g:[
 {h:'Acute in the newborn',c:'b',r:'Well at birth, sick after feeds.',x:[
  ['Urea cycle (OTC)','','**High ammonia, normal anion gap, respiratory alkalosis**'],
  ['Organic acidemia','','High ammonia **plus anion gap acidosis**'],
  ['Maple syrup urine disease','Branched chain','**Maple syrup odour**, poor feeding, seizures'],
  ['Galactosemia','','After milk: jaundice, cataracts, E coli sepsis'],
  ['Hereditary fructose intolerance','','**After juice or fruit**: vomiting, hypoglycemia']]},
 {h:'Storage and others',c:'a',r:'',x:[
  ['Von Gierke (glycogen 1)','','**Severe fasting hypoglycemia, lactic acidosis**, big liver, doll face'],
  ['Pompe (glycogen 2)','','**Floppy baby with big heart**'],
  ['Tay-Sachs','','**Cherry red spot, no HSM**, regression'],
  ['Niemann-Pick','','Cherry red spot **with HSM**'],
  ['Gaucher','','Bone pain, HSM, **crumpled tissue paper** cells'],
  ['Homocystinuria','','Tall, **lens down and in**, clots, delay'],
  ['PKU','','Musty odour, fair skin']]}]}
]},
{id:'dev',al:'development developmental general peds milestones toxicology poisoning',name:'Development and general peds',sheets:[
{id:'milestones',t:'Milestones and red flags',q:'',g:[
 {h:'Motor',c:'a',r:'',x:[
  ['2 months','Head up prone','Social smile'],
  ['4 to 6 months','Roll, sit with support at 6','Primitive reflexes (Moro, grasp, rooting) **gone by 6 months**. Parachute stays'],
  ['9 months','Crawl, pincer grasp starting','Stranger anxiety, peek-a-boo'],
  ['12 months','Walk, 1 word','Walk alone by 15 to 18 months'],
  ['Drawing','Circle 3, cross 4, square 4, triangle 5','']]},
 {h:'Language and social',c:'c',r:'',x:[
  ['Words','1 word at 1, **2-word phrases at 2**','Half understood at 2, all at 4'],
  ['Language delay','','**Check hearing first**'],
  ['Red flags','','**Hand preference before 1 year**, any lost skill, no babble by 12 months']]},
 {h:'Toileting and behaviour',c:'d',r:'',x:[
  ['Enuresis','Pathologic after 5','Urinalysis, alarm'],
  ['Encopresis','After 4','Usually **constipation with overflow**. Clean out, stool softener'],
  ['Sleep terrors and breath-holding','','Reassure']]}]},
{id:'vaccines',t:'Vaccines',q:'',g:[
 {h:'Schedule highlights',c:'a',r:'',x:[
  ['Birth','Hep B','Mom HBsAg positive: **hep B vaccine plus HBIG within 12 hours**'],
  ['2, 4, 6 months','DTaP, IPV, Hib, PCV, rotavirus','Rotavirus first dose by 15 weeks'],
  ['12 months','**Live vaccines**: MMR, varicella','Not before 12 months. Not in pregnancy or severe immune suppression']]},
 {h:'Contraindications',c:'b',r:'',x:[
  ['Real','Anaphylaxis to a dose or component','MMR: **neomycin or gelatin** allergy. Live vaccines: SCID, pregnancy, high-dose steroids'],
  ['Not real','Mild illness, low fever, egg allergy for MMR','Give the vaccine']]}]},
{id:'tox',t:'Poisoning and emergencies',q:'',g:[
 {h:'Toxidromes',c:'b',r:'',x:[
  ['Acetaminophen','','Early nausea only, then liver failure. **N-acetylcysteine**'],
  ['Aspirin','','Tinnitus, **respiratory alkalosis then anion gap acidosis**. Bicarbonate'],
  ['Iron','','Vomiting, bloody stool, anion gap acidosis, pills on X-ray. **Deferoxamine**'],
  ['Opioids','','Pinpoint pupils, slow breathing. Naloxone'],
  ['Anticholinergic','','Hot, dry, red, dilated pupils. Physostigmine'],
  ['Carbon monoxide','','Headache in winter, whole family. **100% O2**, hyperbaric'],
  ['Methemoglobinemia','','**Chocolate brown blood, sats around 85% not improving with O2**. Methylene blue'],
  ['Button battery','','**Halo on X-ray**. Remove from esophagus now'],
  ['Caustic','','Endoscopy. No vomiting']]},
 {h:'Emergencies',c:'a',r:'',x:[
  ['Pediatric arrest','Usually **respiratory**','Airway and breathing first'],
  ['Anaphylaxis','','IM epinephrine'],
  ['Drowning','Leading injury death age 1 to 4','O2, watch 8 hours'],
  ['Reye syndrome','**Aspirin in a viral illness**','Vomiting, encephalopathy, liver failure, hypoglycemia']]}]}
]}
];
