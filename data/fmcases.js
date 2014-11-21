db.items.insert({
    title: "Home", pageType: "nav", id: 1,
    items: [
	{title: "Cardiology", id: 2, pageType: 'nav'},
	{title: "Emergency", id: 3, pageType: 'nav'},
	{title: "Endocrinology", id: 4, pageType: 'nav'},
	{title: "Gastroenterology", id: 5, pageType: 'nav'},
	{title: "Gynecology", id: 6, pageType: 'nav'},
	{title: "Hematology", id: 7, pageType: 'nav'},
	{title: "Infectious Disease", id: 8, pageType: 'nav'},
	{title: "Nephrology", id: 9, pageType: 'nav'},
	{title: "Neurology", id: 10, pageType: 'nav'},
	{title: "Obstetrics", id: 11, pageType: 'nav'},
	{title: "Oncology", id: 12, pageType: 'nav'},
	{title: "Orthopedics", id: 13, pageType: 'nav'},
	{title: "Otolaryngology (ENT)", id: 14, pageType: 'nav'},
	{title: "Pediatrics", id: 15, pageType: 'nav'},
	{title: "Preventive Medicine", id: 16, pageType: 'nav'},
	{title: "Psychiatry", id: 17, pageType: 'nav'},
	{title: "Pulmonology", id: 18, pageType: 'nav'},
	{title: "Rheumatology", id: 19, pageType: 'nav'},
	{title: "Urology", id: 20, pageType: 'nav'},
	{title: "Surgery", id: 21, pageType: 'nav'},
    ]
});

db.items.insert({
    title: "Orthopedics", pageType: "nav", id: 13,
    items: [
	{title: "Low Back Pain", id: 130, pageType: 'nav'}
    ]
});

db.items.insert({
    title: "Low Back Pain", pageType: "nav", id: 130,
    items: [
	{title: "Background, risk factors, prognosis", id: 1300, pageType: 'content'},
	{title: "Differential Diagnosis", id: 1301, pageType: 'content'},
	{title: "Musculoskeletal exam", id: 1302, pageType: 'content'},
	{title: "Neurological exam", id: 1303, pageType: 'content'},
	{title: "Red flags", id: 1304, pageType: 'content'},
	{title: "Diagnostic tests", id: 1305, pageType: 'content'},
	{title: "Treatment", id: 1306, pageType: 'content'}
    ]
});

db.items.insert({
    title: "Background, risk factors, prognosis", id: 1300,
    content: "<div class='title'>Background, risk factors, prognosis<div class='level-1'>Background<div class='level-2'>Low back pain (LBP) is the fifth most common reason for all doctor visits. In the US, lifetime prevalence of LBP is 60-80%. The direct and indirect costs for treatment of LBP are estimated to be $100 billion annually. Fortunately, most LBP resolves in two to four weeks.</div></div><div class='level-1'>Risk Factors<div class='level-2'>Prolonged sitting, with truck driving having the highest rate of LBP, followed by desk jobs.</div><div class='level-2'>Deconditioning.</div><div class='level-2'>Sub-optimal lifting and carrying habits.</div><div class='level-2'>Repetitive bending and lifting.</div><div class='level-2'>Spondylolysis, disc-space narrowing, spinal instability, and spina bifida occulta.</div><div class='level-2'>Obesity is a possible risk factor, but the evidence is limited and inconsistent.</div></div><div class='level-1'>Red Flags For Serious Illness or Neurologic Impairment<div class='level-2'>Fever</div><div class='level-2'>Unexplained weight loss</div><div class='level-2'>Pain at night</div><div class='level-2'>Bowel or bladder incontinence</div><div class='level-2'>Neurologic symptoms</div></div><div class='level-1'>The major task in treating back pain is to distinguish the common causes for back pain (95% of cases) from the 5% with serious underlying diseases or neurologic impairments that are potentially treatable.</div><div class='level-1'>Acute Low Back Pain Prognosis<div class='level-2'>Most cases of low back pain are acute in onset and resolution, with 90% resolving within one month and only 5% remain disabled longer than three months.</div><div class='level-2'>For patients who are out of work greater than six months, there is only 50% chance of them returning to work; this drops to almost zero chance if greater than two years.</div><div class='level-2'>Patients who are older (>45) and patients who have psychosocial stress take longer to recover.</div><div class='level-2'>Recurrence rate for back pain is high at 35 to 75%</div></div></div>"
});

db.items.insert({
    title: "Differential Diagnosis", id: 1301,
    content: "<div class='title'><div>Differential diagnosis</div><div class='one-half border-right'><div class='level-1'>Congenital<div class='level-2'>Scoliosis</div><div class='level-2'>Kyphosis</div><div class='level-2'>Spondylolysis</div></div><div class='level-1'>Traumatic<div class='level-2'>Lumbar strain</div><div class='level-2'>Compression fracture</div></div><div class='level-1'>Metabolic<div class='level-2'>Osteoporosis</div><div class='level-2'>Hyperparathyroidism</div><div class='level-2'>Paget&apos;s disease</div><div class='level-2'>Osteomalacia</div></div><div class='level-1'>Infectious<div class='level-2'>Pyelonephritis</div><div class='level-2'>Osteomyelitis</div><div class='level-2'>Discitis</div><div class='level-2'>Herpes zoster</div><div class='level-2'>Spinal or epidural abscess</div></div><div class='level-1'>Inflammatory<div class='level-2'>Ankylosing spondylitis</div><div class='level-2'>Sacroiliitis</div><div class='level-2'>Rheumatoid arthritis</div></div></div><div class='one-half'><div class='level-1'>Neoplastic<div class='level-2'>Multiple myeloma</div><div class='level-2'>Metastatic disease</div><div class='level-2'>Lymphoma/leukemia</div><div class='level-2'>Osteosarcoma</div></div><div class='level-1'>Degenerative<div class='level-2'>Disc herniation</div><div class='level-2'>Osteoarthritis</div><div class='level-2'>Facet arthropathy</div><div class='level-2'>Spinal stenosis</div></div><div class='level-1'>Vascular<div class='level-2'>Aortic aneurysm</div><div class='level-2'>Diabetic neuropathy</div></div><div class='level-1'>Visceral<div class='level-2'>Prostatitis</div><div class='level-2'>PID</div><div class='level-2'>Ovarian cyst</div><div class='level-2'>Endometriosis</div><div class='level-2'>Kidney stones</div><div class='level-2'>Cholecystitis</div><div class='level-2'>Pancreatitis</div></div></div><div class='level-1'>Common diagnoses<div class='level-2'>Pain worse with movement and sitting is suggestive of a mechanical cause of back pain, such as a <b>lumbar strain</b>, <b>disc herniation</b>, or <b>degenerative arthritis</b>.</div><div class='level-2'>Pain radiating down the leg and numbness indicate nerve involvement, such as in <b >disc herniation</b>.</div><div class='level-2'>Pain that improves with the supine position suggests <b >spinal stenosis</b> and <b>disc herniation</b>.</div></div><div class='level-1'>Less likely diagnoses</b><div class='row'><div class='left'>Spinal fracture</div><div class='right'><div class='level-2'>Not likely without history of trauma.</div></div></div><div class='row'><div class='left'>Cauda equina syndrome</div><div class='right'><div class='level-2'><b>Should always be considered</b> due to the seriousness of the consequences.</div><div class='level-2'>Occurs when a large mass effect (such as an acute disc herniation or a tumor) compresses the cauda equina, causing pain radiating down the leg and numbness of the leg.</div><div class='level-2'>True emergency. <b>Decompression should be performed within 72 hours</b> to avoid permanent neurologic deficits.</div><div class='level-2'>Low on the differential if the patient denies problem with bowel or bladder control.</div></div></div><div class='row'><div class='left'>Pyelonephritis</div><div class='right'><div class='level-2'>Unlikely with lack of fever and urinary symptoms.</div></div></div><div class='row'><div class='left'>Malignancy</div><div class='right'><div class='level-2'><b>Important consideration.</b> A very serious, although uncommon, cause of back pain.</div><div class='level-2'>Unlikely without a history of cancer.</div><div class='level-2'>Back pain due to malignancy is <b>localized to the affected bones</b>, it is a <b>dull, throbbing pain</b> that <b>progresses slowly</b>, and it <b>increases with recumbency or cough</b>.</div><div class='level-2'>More commonly seen in <b>patients over 50</b>.</div></div></div><div class='row'><div class='left'>Ankylosing spondylitis</div><div class='right'><div class='level-2'><b>Chronic</b>, painful, <b>inflammatory</b> <b>arthritis</b> primarily affecting the <b>spine</b> and <b>sacroiliac joints</b>, causing eventual fusion of the spine.</div><div class='level-2'>Often seen in patients <b>15-40 years old</b>, associated with <b>morning stiffness and achiness over the sacroiliac joint and lumbar spine</b>.</div></div></div><div class='row'><div class='left'>Spondylolisthesis</div><div class='right'><div class='level-2'><b>Anterior displacement of a</b> <b>vertebra or the vertebral column</b> in relation to the vertebrae below.</div><div class='level-2'>Can occur at <b>any age</b>.</div><div class='level-2'>Causes <b>aching back and posterior thigh discomfort </b>that <b>increases with activity or bending</b>.</div></div></div><div class='row'><div class='left'>Prostatitis</div><div class='right'><div class='level-2'>Can cause referred LBP in men.</div><div class='level-2'>Pelvic inflammatory disease and endometriosis in women can cause referred LBP.</div><div class='level-2'>Expect to find evidence of infection in the history.</div></div></div><div class='row'><div class='left'>Pancreatitis</div><div class='right'><div class='level-2'>Pancreatitis and other gastrointestinal diseases such as cholecystitis and ulcers can cause LBP via visceral pain.</div><div class='level-2'>Usually associated with other abdominal symptoms.</div></div></div></div></div>"
});

db.items.insert({
    title: "Musculoskeletal exam", id: 1302,
    content: "<div class='title'>Musculoskeletal exam<div class='title-2'>Standing<div class='level-1'>General<div class='level-2'>Throughout the whole exam make certain to note how your patient is sitting, standing, and walking in general, asking yourself 'What is his degree of impairment&#8204;' and 'How uncomfortable is he?'.</div></div><div class='level-1'>Inspection<div class='level-2'>Look at posture, contour and symmetry.</div><div class='level-2'>Check for lordosis, kyphosis, scoliosis.</div></div><div class='level-1'>Palpation<div class='level-2'>Check for any tenderness, tightness, rope-like tension, or inflammation in the paraspinous muscles or tenderness over bony prominences.</div><div class='level-2'>This procedure checks for muscle spasm, vertebral fracture, or infection.</div></div><div class='level-1'>Range of Motion (ROM)<div class='level-2'>Range of motion may be varied due to the patient&apos;s age and body habitus.</div><div class='level-2'>Lumbar Flexion<div class='level-3'>Have the patient stand with their feet and hands together, like they are about to dive off a diving board, bending forward toward their toes (normal is 90 degrees).</div><div class='level-3'>Look out across the back to see if the shoulders are level.</div><div class='level-3'>May help more easily visualize slight scoliosis.</div><div class='level-3'>Best measure of spine mobility. Restriction and pain during flexion are suggestive of herniation, osteoarthritis, or muscle spasm.</div></div><div class='level-2'>Lumbar Extension<div class='level-3'>Pain with extension is suggestive of degenerative disease or spinal stenosis (normal is 15 degrees).</div></div><div class='level-2'>Lateral Motion<div class='level-3'>Most patients should be able to touch the proximal fibular head of the knee (normal is 45 degrees).</div><div class='level-3'>Pain on the same side as bending is suggestive of bone pathology, such as osteoarthritis or neural compression. Pain on the opposite side of bending is suggestive of a muscle strain.</div></div></div><div class='level-1'>Gait<div class='level-2'>Ask the patient to walk on heels and toes. Expect normal gait, even with disc herniation.</div><div class='level-2'>Difficulty with heel walk is associated with L5 disc herniation.</div><div class='level-2'>Difficulty with toe walk is associated with S1 disc herniation.</div></div><div class='level-1'>Stoop Test<div class='level-2'>Have the patient go from a standing to squatting position.</div><div class='level-2'>In patients with central spinal stenosis, squatting will reduce the pain.</div></div></div><div class='title-2'>Supine<div class='level-1'>Abdominal Exam<div class='level-2'>Auscultation<div class='level-3'>Check for abdominal bruit, looking for abdominal aortic aneurysm.</div></div><div class='level-2'>Palpitation<div class='level-3'>Check for abdominal tenderness (on all patients, not just female patients), pelvic tenderness (PID), pulsatile mass, unequal femoral/brachial pulses (abdominal aortic aneurysm), or any general tenderness indicating visceral pathology.</div></div></div><div class='level-1'>Rectal Exam<div class='level-2'>To be done only on patients with red flags or alarm symptoms.</div><div class='level-2'>Check for masses, bleeding, or abnormal rectal tone.</div><div class='level-2'>Bleeding or rectal mass can be signs of cancer with metastasis to the spine causing back pain.</div><div class='level-2'>Decreased tone can indicate disc herniation and/or cauda equina syndrome.</div></div><div class='level-1'>Passive Straight Leg Raise (SLR or Lasegue&#39;s sign)<div class='level-2'>The normal leg can be raised 80 degrees.</div><div class='level-2'>If a patient only raises their leg <80 degrees, they have tight hamstrings or a sciatic nerve problem.<div class='level-3'>To differentiate between tight hamstrings and a sciatic nerve problem, raise the leg to the point of pain, lower slightly, then dorsiflex the foot. If there is no pain with dorsiflexion, the patient&nbsp;s hamstrings are tight.</div></div><div class='level-2'>The test is positive if pain radiates down the posterior/lateral thigh past the knee. This radiation indicates stretching of the nerve roots (specifically S1 or L5) over a herniated disc.</div><div class='level-2'>This pain will most likely occur between 40 and 70 degrees. Pain earlier than 30 degrees is suggestive of malingering.</div><div class='level-2'>Pain in the opposite leg during a straight leg raise is suggestive of root compression due to central disc herniation.</div><div class='level-2'>When compared to MRI, the straight leg raise test has a sensitivity of 0.36 and specificity of 0.74.</div><div class='level-2'>The ipsilateral straight leg raise test has a sensitivity of 0.80 and a specificity of about 0.40. Thus, a negative test makes a herniated disc unlikely, but a positive test is non-specific.</div></div><div class='level-1'>Crossed Leg Raise<div class='level-2'>Raise the asymptomatic leg.</div><div class='level-2'>Test is positive if pain is increased in the contralateral leg; this correlates with the degree of disc herniation. Such results imply a large central herniation.</div><div class='level-2'>Cross SLR test is much less sensitive (0.25) but is highly specific (about 0.90). Thus, a negative test is nonspecific, but a positive test is virtually diagnostic of disc herniation.</div></div><div class='level-1'>FABER Test (Flexion, Abduction, and External Rotation)</b><div class='level-2'>Flex the hip and place the foot of the tested leg on the opposite knee. Then place pressure on the tested knee while stabilizing the opposite hip.</div><div class='level-2'>Positive if there is pain at the hip or sacral joint or if the leg cannot lower to the point of being parallel to the opposite leg.</div><div class='level-2'>The test looks for pathology of the hip joint or sacrum (sacroiliac pain from sacroiliitis).</div><div class='level-2'>The test should be done on all patients suspected of having sacroiliac pain, not just in the elderly patients. Sacroiliitis can occur in the young population as well.</div></div><div class='level-1'>Pelvic Compression Test<div class='level-2'>Forcibly press together the patient&#213;s hips.</div><div class='level-2'>A positive test elicits pain in the sacroiliac joint.</div></div><div class='level-1'>Muscle Atrophy<div class='level-2'>Look for atrophy of quadriceps and calf muscles.</div><div class='level-2'>Lack of atrophy, despite patient&#39;s complaints of long-term weakness, suggests malingering.</div></div></div></div>"
});

db.items.insert({
    title: "Neurological exam", id: 1303,
    content: "<div class='title'>Neurological exam<div class='level-1'>Overview<div class='level-2'>Check reflexes, muscle strength, and sensation of the lower extremities.</div><div class='level-2'>Focus on the L4, L5, and S1 nerve roots because most neuropathic back pain is due to impingement of these. Therefore, check the patellar and Achilles reflexes.</div><div class='level-2'>Check muscle strength for hip flexion, abduction, and adduction; knee extension and flexion; as well as ankle dorsiflexion and plantar flexion.</div><div class='level-2'>Test for sharp and light touch along the dermatomal distribution of the great toe (L5), lateral malleolus and posterolateral foot (S1).</div></div><div class='level-1'>Deep Tendon Reflexes<div class='level-2'>Grading<div class='row'><div class='left'>0</div><div class='right'>No evidence of contraction</div></div><div class='row'><div class='left'>1+</div><div class='right'>Decreased, but still present (hyporeflexic)</div></div><div class='row'><div class='left'>2+</div><div class='right'>Normal</div></div><div class='row'><div class='left'>3+</div><div class='right'>Increased (hyper-reflexic)</div></div><div class='row'><div class='left'>4+</div><div class='right'>Clonus – Repetitive shortening of the muscle afterr a single stimulation</div></div></div><div class='level-2'>Decreased patella reflex implies nerve impingement at the L3-L4 level.</div><div class='level-2'>Decreased Achilles reflex implies nerve impingement of L5-S1 levels.</div><div class='level-2'>Hyper-reflexia is a sign of upper-motor neuron syndrome associated with spinal cord compression.</div></div><div class='level-1'>Muscle Strength<div class='level-2'>Rating Scale<div class='row'><div class='left'>0/5</div><div class='right'>No movement</div></div><div class='row'><div class='left'>1/5</div><div class='right'>Barest flicker of movement of the muscle, though not enough to move the structure to which it is attached</div></div><div class='row'><div class='left'>2/5</div><div class='right'>Voluntary movement, which is not sufficient to overcome the force of gravity. For example, the patient would be able to slide their hand across a table but not lift it from the surface.</div></div><div class='row'><div class='left'>3/5</div><div class='right'>Voluntary movement capable of overcoming gravity, but not any applied resistance. For example, the patient could raise their hand off a table, but not if any additional resistance were applied.</div></div><div class='row'><div class='left'>4/5</div><div class='right'>Voluntary movement capable of overcoming 'some' resistance</div></div><div class='row'><div class='left'>5/5</div><div class='right'>Normal strength</div></div></div><div class='level-2'>Hip Flexion (L 2, 3, 4)<div class='level-3'>Ask the patient to lift his thigh while you push down on his thigh.</div><div class='level-3'>Hip Abduction (L 4, 5, S1)</div><div class='level-3'>Ask the patient to push his legs apart while you push them together.</div></div><div class='level-2'>Hip Adduction (L 2, 3, 4)<div class='level-3'>Ask the patient to push his legs together while you push them apart.</div></div><div class='level-2'>Knee Extension (L 2, 3, 4)<div class='level-3'>Ask you patient to extend his knee while you push it down.</div></div><div class='level-2'>Knee Flexion (L 5, S1, S2)<div class='level-3'>Ask the patient to flex his knee while you push against it.</div></div><div class='level-2'>Ankle Dorsiflexion (L 4, 5)<div class='level-3'>Ask the patient to point his foot up while you push it down.</div></div><div class='level-2'>Ankle Plantar Flexion (S 1, S 2)<div class='level-3'>Ask the patient to point his foot down while you push it up.</div></div><div class='level-2'>Decreased strength implies nerve impingement of the associated nerve in parenthesis.</div></div><div class='level-1'>Sensation<div class='level-2'>Test for sharp and light touch along dermatomal distribution, great toe (L5), lateral malleolus, and posteriolateral foot (S1).</div></div></div>"
});

db.items.insert({
    title: "Red flags", id: 1304,
    content: "<div class='title'>Red flags<div class='level-1'>General<div class='level-2'>Timely treatment of these conditions is important to avoid serious consequences.</div><div class='level-2'>Indications for early diagnostic testing such as x-rays and other imaging and referral:<div class='level-3'>Progressive neurological deficits</div><div class='level-3'>Not responding to conservative treatment</div><div class='level-3'>Red flags signaling serious medical conditions such as fracture, cancer, infection, and cauda equina syndrome</div></div></div><div class='level-1'>Cancer<div class='level-2'>History of cancer</div><div class='level-2'>Unexplained weight loss >10 kg within 6 months</div><div class='level-2'>Age over 50 years or under 17 years old</div><div class='level-2'>Failure to improve with therapy</div><div class='level-2'>Pain persists for more than 4 to 6 weeks</div><div class='level-2'>Night pain or pain at rest</div></div><div class='level-1'>Infection<div class='level-2'>Persistent fever (temperature over 100.4 F)</div><div class='level-2'>History of intravenous drug abuse</div><div class='level-2'>Recent bacterial infection, particularly bacteremia (UTI, cellulitis, pneumonia)</div><div class='level-2'>Immunocompromised states (chronic steroid use, diabetes, HIV)</div></div><div class='level-1'>Cauda Equina Syndrome<div class='level-2'>Urinary incontinence or retention</div><div class='level-2'>Saddle anesthesia</div><div class='level-2'>Anal sphincter tone decreased or fecal</div><div class='level-2'>Bilateral lower extremity weakness or numbness</div><div class='level-2'>Progressive neurologic deficitst</div></div><div class='level-1'>Significant Herniated nucleus pulposus<div class='level-2'>Major muscle weakness (strength 3 of 5 or less)</div><div class='level-2'>Foot drop</div></div><div class='level-1'>Vertebral Fracture<div class='level-2'>Prolonged use of corticosteroids</div><div class='level-2'>Mild trauma over age 50 years</div><div class='level-2'>Age greater than 70 years</div><div class='level-2'>History of osteoporosis</div><div class='level-2'>Recent significant trauma at any age (car accident, fall from substantial height)</div><div class='level-2'>Previous vertebral fracture</div></div></div>"
});

db.items.insert({
    title: "Diagnostic tests", id: 1305,
    content: "<div class='title'>Diagnostic tests<div class='level-1'>Laboratory tests generally are not needed in the evaluation of acute low back pain.</div><div class='level-1'>CBC<div class='level-2'>CBC and sedimentation rate should be ordered if tumor or infection is suspected.</div></div><div class='level-1'>X-ray<div class='level-2'>Agency for Health Care Policy and Research (AHCPR) guidelines for x-ray:<div class='level-3'>History of trauma</div><div class='level-3'>Strenuous lifting in patient with osteoporosis</div><div class='level-3'>Prolonged steroid use</div><div class='level-3'>Osteoporosis</div><div class='level-3'>Age <20 and >70</div><div class='level-3'>History of cancer</div><div class='level-3'>Fever, chills, and weight loss</div><div class='level-3'>Pain worse when supine or severe at night</div><div class='level-3'>Spinal fracture, tumor, or infection</div></div></div><div class='level-1'>Lumbar spine film<div class='level-2'>Lumbar spine films are commonly used, but lack specificity and have a high rate of false-positive findings.<div class='level-3'>Patients with symptoms and pathology may have an apparently benign x-ray and asymptomatic patients may have abnormal x-rays.</div></div><div class='level-2'>High-yield criteria for obtaining lumbar films:<div class='level-3'>Age over 50</div><div class='level-3'>Significant trauma</div><div class='level-3'>Neurologic defect (sensory or motor)</div><div class='level-3'>Weight loss of 10 pounds</div></div><div class='level-2'>History of ankylosing spondylitis</div><div class='level-2'>Drug or alcohol abuse</div><div class='level-2'>History of malignancy</div><div class='level-2'>Fever of 100 degrees or higher</div></div><div class='level-1'>MRI<div class='level-2'>An MRI is indicated if the following are present:<div class='level-3'>Neurological deficit</div><div class='level-3'>Radiculopathy</div><div class='level-3'>Progressive major motor weakness</div><div class='level-3'>Cauda equina compression (sudden bowel/bladder disturbance)</div><div class='level-3'>Suspected systemic disorder (metastatic or infectious disease)</div><div class='level-3'>Failed six weeks of conservative care</div></div><div class='level-2'>However, 75% of herniated discs improve with six weeks of conservative therapy.</div><div class='level-2'>MRI testing is not associated with clinical benefit in randomized trials.</div><div class='level-2'>Early MRI is not associated with improved outcomes in patients with acute back pain or radiculopathy.</div><div class='level-2'>If surgery is being considered, some physicians recommend, in the absence of red flags, to obtain an imaging study after one month of symptoms.</div></div></div>"
});

db.items.insert({
    title: "Treatment", id: 1306,
    content: "<div class='title'>Treatment<div class='level-1'>General measures<div class='level-2'>Apply local therapy (heat/cold) as tolerated.</div><div class='level-2'>Maintain good posture and practice good lifting techniques at all time.</div><div class='level-2'>Call the clinic if there is no relief or if the pain increases, progression of neurologic deficits, development of problem with bowel or bladder control.</div></div><div class='level-1'>Pharmacologic<div class='level-2'>First line medications<div class='level-3'>Non-steroidal anti-inflammatory drugs (NSAIDs)<div class='level-4'>A systematic review of randomized controlled studies found strong evidence that NSAIDs and muscle relaxants are helpful in the treatment of LBP.</div></div><div class='level-3'>Acetaminophen<div class='level-4'>There is conflicting evidence about the superiority of NSAIDs to acetaminophen.</div></div><div class='level-3'>Muscle relaxants<div class='level-4'>The various NSAIDs and muscle relaxants are equally effective, while some muscle relaxants are more sedating.</div></div></div><div class='level-2'>Opioids<div class='level-3'>Second- or third-line option for treatment of back pain.</div><div class='level-3'>There is little evidence regarding the benefits and harms of opioid use in LBP.</div></div><div class='level-2'>Corticosteroids<div class='level-3'>No studies support the use of oral steroids in patients with LBP.</div></div></div><div class='level-1'>Activity level<div class='level-2'>Avoid strenuous activities but remain active.</div><div class='level-2'>Bed rest is not more effective than continuation of activities of daily living.</div><div class='level-2'>Prolonged bed rest may contribute to muscle atrophy, cardiovascular deconditioning, bone mineral loss, and reinforcement of illness behavior.</div></div><div class='level-1'>Physical Therapy<div class='level-2'>Tailored physical therapy is slightly more effective for acute back pain compared to patients who just stay active.</div><div class='level-2'>There is great variation in physical therapy because various interventions (exercises, traction, massage) and different modalities (heat, ice, ultrasound) may be used.</div><div class='level-2'>Spinal manipulation is safe and can help in the short term.</div><div class='level-2'>There is limited evidence in the use of acupuncture in the treatment of LBP, with some studies showing that it is not beneficial.</div></div></div>"
});
