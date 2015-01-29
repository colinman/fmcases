db.items.insert
  id: 1, title: "Home", pageType: "nav"
  items: [
    {title: "Cardiovascular", id: 2, pageType: 'nav'}
    {title: "Emergency", id: 3, pageType: 'nav'}
    {title: "Endocrine", id: 4, pageType: 'nav'}
    {title: "Gastrointestinal", id: 5, pageType: 'nav'}
    {title: "Gynecological", id: 6, pageType: 'nav'}
    {title: "Hematological", id: 7, pageType: 'nav'}
    {title: "Infectious Disease", id: 8, pageType: 'nav'}
    {title: "Renal", id: 9, pageType: 'nav'}
    {title: "Neurological", id: 10, pageType: 'nav'}
    {title: "Maternal Care", id: 11, pageType: 'nav'}
    {title: "Oncologic", id: 12, pageType: 'nav'}
    {title: "Musculoskeletal", id: 13, pageType: 'nav'}
    {title: "Ear, Nose, Throat", id: 14, pageType: 'nav'}
    {title: "Pediatrics", id: 15, pageType: 'nav'}
    {title: "Preventive Medicine", id: 16, pageType: 'nav'}
    {title: "Psychiatric", id: 17, pageType: 'nav'}
    {title: "Pulmonary", id: 18, pageType: 'nav'}
    {title: "Rheumatologic", id: 19, pageType: 'nav'}
    {title: "Urological", id: 20, pageType: 'nav'}
    {title: "Surgical", id: 21, pageType: 'nav'}
  ]

db.items.insert
  id: 2, title: "Cardiovascular", pageType: "nav"
  items: [
  	{id: 20, title: "Hypertension", pageType: 'nav'}
  ]

db.items.insert
  id: 20, title: "Hypertension", pageType: "nav"
  items: [
  	{id: 200, title: "Screening", pageType: "content"}
  	{id: 201, title: "Definition", pageType: "content"}
  	{id: 202, title: "Signs or symmptoms", pageType: "content"}
  	{id: 203, title: "Risk Factors", pageType: "content"}
  	{id: 204, title: "Causes", pageType: "content"}
  	{id: 205, title: "Diagnosis", pageType: "content"}
  	{id: 206, title: "Physical exam", pageType: "nav"}
  ]

db.items.insert
  id: 200, title: "Screening", pageType: "content"
  content: '<div class="title">Screening</div><div class="level-1">The United States Preventive Services Task Force (USPSTF) recommends screening for high blood pressure in patients without known hypertension starting at age 18. (USPSTF Grade A recommendation: a high certainty that the net benefit is substantial).</div>'

db.items.insert
  id: 201, title: "Definition", pageType: "content"
  content: '<div class="title">Definition</div><div class="level-1 emphasis">Hypertension</div><div class="level-1">Hypertension affects approximately 50 million people in the United States and as many as one billion people around the globe.</div><div class="level-2 bullet">In adults 60 years and older, a systolic blood pressure > 150 or a diastolic blood pressure > 90 is defined as hypertension.</div><div class="level-2 bullet">I adults younger than 60 years old, a systolic blood pressure > 140 or a diastolic blood pressure > 90 is defined as hypertension.</div><div class="level-1 emphasis">Prehypertension</div><div class="level-1 bullet">In adults 18 years and older, a systolic blood pressure 120-139 or a diastolic blood pressure 80-89 is defined as prehypertension.</div><br/><div class="level-1">This designation is intended to identify individuals in whom early intervention by adoption of healthy lifestyles could reduce blood pressure, decrease the rate of progression of blood pressure to hypertensive levels with age, or prevent hypertension entirely. Prehypertension is technically a higher subset of normal blood pressure.</div>'

db.items.insert
  id: 202, title: "Signs or symptoms", pageType: "content"
  content: '<div class="title">Signs or symptoms</div><div class="level-1">Untreated or poorly treated hypertension leads to serious complications in several organ systems including:</div><br/><div class="level-2 bullet"><span class="emphasis">Heart:</span> Left ventricular hypertrophy, angina or prior myocardial infarction, prior coronary revascularization, and heart failure.</div><div class="level-2 bullet"><span class="emphasis">Brain:</span> Stroke or transient ischemic attack.</div><div class="level-2 bullet"><span class="emphasis">Kidneys:</span> Chronic renal failure.</div><div class="level-2 bullet"><span class="emphasis">Blood vessels:</span> Peripheral artery disease.</div><div class="level-2 bullet"><span class="emphasis">Eyes:</span> Retinopathy.</div><br/><div class="level-1">Thus, it is important to ask about signs or symptoms of end organ disease in these areas. It is also appropriate to ask about history of known hypertension and duration. A patient with more than 10 years of hypertension may already have end organ disease.</div>'

db.items.insert
  id: 203, title: 'Risk factors', pageType: 'content'
  content: '<div class="title">Risk factors<div class="level-1 bullet">A patient with a history of diabetes, high cholesterol, and/or obesity may also have hypertension as part of metabolic syndrome.</div><div class="level-1 bullet">A family history of premature cardiovascular disease or death (men under age 55, women under age 65) increases the risk of cardiovascular disease or death up to eight times higher than that of the rest of the population.</div><div class="level-1 bullet">Tobacco smoking elevates blood pressure, contributes to increased morbidity and mortality, and interferes with the efficacy of blood pressure medications.</div><div class="level-1 bullet">Alcohol intake should be limited to no more than 1 oz (30 mL) of ethanol, the equivalent of two drinks per day in most men and no more than 0.5 oz of ethanol (one drink) per day in women and lighter weight persons.</div><div class="level-1 bullet">Cocaine and ketamine use and narcotic withdrawal can elevate blood pressure.</div><div class="level-1 bullet">Other major risk factors include: age (older than 55 for men, 65 for women), physical inactivity, microalbuminuria or estimated GFR < 60 mL/minute.</div></div>'

db.items.insert
  id: 204, title: 'Causes', pageType: 'content'
  content: '<div class="title">Causes</div><div class="level-1">About 95-98% of the hypertension in the United States is<span class="emphasis"> essential hypertension</span> - chronically higher blood pressure readings than normal with no underlying identifiable cause. Identifiable causes of hypertension are far less common and are known as<span class="emphasis"> secondary hypertension</span> Causes of secondary hypertension include:</div><br/><div class="level-2 bullet">Sleep apnea, chronic kidney disease, primary hyperaldosteronism, renovascular disease, pheochromocytoma, coarctation of the aorta, Cushing’s syndrome, and thyroid or parathyroid disease.</div><div class="level-2 bullet">Prescription medications (e.g., birth control pills, amphetamines, thyroid medications, steroids, and certain antidepressants).</div><div class="level-2 bullet">Over-the-counter medications (e.g., pseudoephedrine, appetite suppressants, or non-steroidal anti-inflammatory drugs).</div><div class="level-2 bullet"> Herbal remedies (e.g., ma huang, bitter orange, ginkgo, ginseng, licorice, and St. John&#39;s wort).</div><div class="level-2 bullet">Cocaine and ketamine use, narcotic withdrawal, excessive alcohol intake, and smoking.</div>'

db.items.insert
  id: 205, title: 'Diagnosis', pageType: 'content'
  content: '<div class="title">Diagnosis<div class="level-1">In order to accurately diagnose a patient with hypertension at least two elevated measurements - five minutes apart, one in each arm, should be made on two or more visits.</div><div class="level-1">A patient cannot be diagnosed with hypertension if the patient is acutely ill or in acute pain.</div><div class="level-1">The measurements are required in each arm because on rare occasions, you may encounter an adult with an aortic anomaly, such as coarctation of the aorta, where blood pressure will be high in the right arm but low on the left.</div><div class="level-1">The patient should be seated quietly for at least five minutes in a chair with their back supported, rather than on an examination table. The arm should be supported at heart level. You want to auscultate the blood pressure with your stethoscope using a properly calibrated and validated instrument. The most important point is using an appropriately sized cuff to ensure accuracy.</div></div>'

db.items.insert
  id: 206, title: 'Physical exam', pageType: 'nav'
  items: [
  	{id: 2060, title: "Body mass index (BMI)", pageType: "expand", expandableContent: '<div class="level-1">Body mass index (BMI)</div><div class="level-2">Assess if the patient is underweight, normal weight, overweight, or obese. Being overweight or obese is a risk factor for hypertension, cholesterol, diabetes, and many other diseases.</div><br/><div class="level-2 emphasis">BMI categories</div><div class="level-3 bullet">Underweight = <18.5</div><div class="level-3 bullet">Normal weight= 18.5-24.9</div><div class="level-3 bullet">Overweight= 25-29.9</div><div class="level-3 bullet">Obesity = 30-40</div><div class="level-3 bullet">Extreme Obesity >40</div>'}
  	{id: 2061, title: "Funduscopic eye exam", pageType: "expand", expandableContent: '<div class="level-1">Funduscopic eye exam</div><div class="level-2">Assess for arteriovenous nicking, cotton-wool spots, flame hemorrhages, exudates, and other changes associated with hypertensive retinopathy (see diagram) or papilledema associated with hypertensive emergencies.</div><div class="img funduscopic"></div>'}
  	{id: 2062, title: "Auscultation for bruits", pageType: "expand", expandableContent: '<div class="level-1">Auscultation for bruits</div><div class="level-2">Auscultate for carotid, abdominal, and femoral bruits to assess for the presence of peripheral vascular and cardiovascular disease, which can occur as a result of hypertension.</div>'}
  	{id: 2063, title: "Thyroid exam": "expand", expandableContent:'<div class="level-1">Thyroid exam</div><div class="level-2">Assess for nodules, tenderness, or thyromegaly, which might indicate hyperthyroidism, one of the causes of secondary hypertension.</div>'}
  	{id: 2064, title: "Lung exam", pageType: "expand", expandableContent:'<div class="level-1">Lung exam</div><div class="level-2">Assess for signs of congestive heart failure, such as crackles or diminished breath sounds. Congestive heart failure can occur with long-standing hypertension, usually over many years.</div>'}
  	{id: 2065, title: "Heart exam", pageType: "expand", expandableContent:'<div class="level-1">Heart exam</div><div class="level-2">Assess the heart rate, rhythm, presence of murmurs, or an enlarged point of maximal impulse, which may indicate cardiovascular disease, valvular disease, or cardiomegaly.</div>'}
  	{id: 2066, title: "Abdominal exam", pageType: "expand", expandableContent:'<div class="level-1">Abdominal exam</div><div class="level-2">Look for abdominal aortic pulsation, bruits, or masses, or enlarged kidneys as hypertension can contribute to peripheral vascular disease and chronic kidney disease..</div>'}
  	{id: 2067, title: "Lower extremity exam", pageType: "expand", expandableContent:'<div class="level-1">Lower extremity exam</div><div class="level-2">Assess for the presence of cardiovascular disease or peripheral vascular disease in the lower extremities such as diminished pulses, loss of extremity hair, thick toenails, cold or red skin.</div>'}
  	{id: 2068, title: "Neurologic exam", pageType: "expand", expandableContent:'<div class="level-1">Neurologic exam</div><div class="level-2">Assess for neurologic changes from ischemic or hypertensive brain disease. It is important to get a baseline neurologic exam even if the findings are normal because subtle changes can happen over time.</div>'}
  ]