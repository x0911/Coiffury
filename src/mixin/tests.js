let types = [
  {
    id: "1",
    en: "Thyroid Profile",
    ar: "تحليل الغدة الدرقية",
    desc: ""
  },
  {
    id: "2",
    en: "Drug Test",
    ar: "تحليل مخدرات",
    desc: ""
  },
  {
    id: "3",
    en: "Vitamins",
    ar: "تحليل فيتامينات",
    desc: ""
  },
  {
    id: "4",
    en: "Tumor Markers",
    ar: "دالالات أورام",
    desc: ""
  },
  {
    id: "5",
    en: "Renal Profile",
    ar: "تحاليل وظائف كلي",
    desc: ""
  },
  {
    id: "6",
    en: "Liver Profile",
    ar: "تحاليل وظائف الكبد",
    desc: ""
  },
  {
    id: "7",
    en: "Dermatology",
    ar: "تحاليل الجلدية",
    desc: ""
  },
  {
    id: "8",
    en: "Lipid Profile",
    ar: "تحليل الدهون بالدم",
    desc: ""
  },
  {
    id: "9",
    en: "Immunology",
    ar: "المناعة",
    desc: ""
  },
  {
    id: "10",
    en: "Hormone Tests",
    ar: "تحليل الهرمونات",
    desc: ""
  },
  {
    id: "11",
    en: "Diabetes Tests",
    ar: "تحليل السكر",
    desc: ""
  },
  {
    id: "12",
    en: "Checkup Packages",
    ar: "فحوصات شاملة",
    desc: ""
  },
  {
    id: "13",
    en: "Blood Count",
    ar: "تحليل صورة الدم",
    desc: ""
  },
  {
    id: "14",
    en: "Urine and Stool",
    ar: "تحليل بول وبراز",
    desc: ""
  },
  {
    id: "15",
    en: "Virology",
    ar: "تحليل فيروسات",
    desc: ""
  }
];
let tests = [
  {
    id: "1",
    type_id: "1",
    en: "Free Triiodothyroxine (T3)",
    ar: "تحليل T3",
    desc: ""
  },
  {
    id: "2",
    type_id: "1",
    en: "Thyroid Function Tests (TSH, FSH, LH, T3, T4)",
    ar: "تحاليل الغدة الدرقية شاملة (TSH, FSH, LH, T3, T4)",
    desc: ""
  },
  {
    id: "3",
    type_id: "1",
    en: "Total Thyroxine (T4)",
    ar: "تحليل T4 كامل",
    desc: ""
  },
  {
    id: "4",
    type_id: "1",
    en: "Follicle Stimulating Hormone (FSH)",
    ar: "هرمون FSH",
    desc: ""
  },
  {
    id: "5",
    type_id: "1",
    en: "Free Thyroxine (T4)",
    ar: "تحليل T4",
    desc: ""
  },
  {
    id: "6",
    type_id: "1",
    en: "Thyroid Stimulating Hormone (TSH)",
    ar: "هرمون TSH",
    desc: ""
  },
  {
    id: "7",
    type_id: "1",
    en: "Total Triiodothyroxine (T3)",
    ar: "تحليل T3 كامل",
    desc: ""
  },
  {
    id: "8",
    type_id: "1",
    en: "Luteininzing Hormone (LH)",
    ar: "هرمون LH",
    desc: ""
  },
  {
    id: "9",
    type_id: "1",
    en: "Alpha-1 Antitrypsin in Serum",
    ar: "ألفا -1 انتيتربسين في مصل الدم",
    desc: ""
  },
  {
    id: "10",
    type_id: "2",
    en: "Barbiturates In Urine",
    ar: "الباربيتورات في البول",
    desc: ""
  },
  {
    id: "11",
    type_id: "2",
    en: "Carbamazepin (Tegretol) Random",
    ar: "كاربامازيبين (Tegretol) عشوائي",
    desc: ""
  },
  {
    id: "12",
    type_id: "2",
    en: "Amphetamine In Urine",
    ar: "الأمفيتامين في البول",
    desc: ""
  },
  {
    id: "13",
    type_id: "2",
    en: "Tramadol In Serum",
    ar: "الترامادول في المصل",
    desc: ""
  },
  {
    id: "14",
    type_id: "2",
    en: "Benzodiazepine In Urine",
    ar: "البنزوديازيبين في البول",
    desc: ""
  },
  {
    id: "15",
    type_id: "2",
    en: "Digoxin (Lanoxin)",
    ar: "الديجوكسين (لانوكسين)",
    desc: ""
  },
  {
    id: "16",
    type_id: "2",
    en: "Amylase In Urine",
    ar: "الأميليز في البول",
    desc: ""
  },
  {
    id: "17",
    type_id: "2",
    en: "Alcohol Level In Blood",
    ar: "مستوى الكحول في الدم",
    desc: ""
  },
  {
    id: "18",
    type_id: "2",
    en: "Phenobarbital",
    ar: "الفينوباربيتال",
    desc: ""
  },
  {
    id: "19",
    type_id: "2",
    en: "Cannabinoids (Marijuana) In Urine",
    ar: "القنب (الماريجوانا) في البول",
    desc: ""
  },
  {
    id: "20",
    type_id: "3",
    en: "Vitamin D",
    ar: "فيتامين د",
    desc: ""
  },
  {
    id: "21",
    type_id: "3",
    en: "Vitamin B12",
    ar: "فيتامين ب 12",
    desc: ""
  },
  {
    id: "22",
    type_id: "4",
    en: "Male Tumor Marker (CEA, PSA)",
    ar: "دالالات أورام شاملة للرجال (CEA, PSA)",
    desc: ""
  },
  {
    id: "23",
    type_id: "4",
    en: "Liver Tumor Markers (AFP)",
    ar: "دالالات أورام الكبد (AFP)",
    desc: ""
  },
  {
    id: "24",
    type_id: "4",
    en: "Prostate Tumor Markers (PSA-Free)",
    ar: "دالالات أورام البروستاتا (PSA-Free)",
    desc: ""
  },
  {
    id: "25",
    type_id: "4",
    en: "Breast Tumor Markers (CA-15.3)",
    ar: "دالالات أورام الثدي (CA-15.3)",
    desc: ""
  },
  {
    id: "26",
    type_id: "4",
    en: "Colon Tumor Markers (CA-19.9)",
    ar: "دالالات أورام القولون (CA-19.9)",
    desc: ""
  },
  {
    id: "27",
    type_id: "4",
    en: "Female Tumor Marker (CEA, CA-15.3, CA-125)",
    ar: "دالالات أورام شاملة للنساء (CEA, CA-15.3, CA-125)",
    desc: ""
  },
  {
    id: "28",
    type_id: "4",
    en: "Carcinoembryonic Antigen (CEA)",
    ar: "مستضد سرطاني المنشأ (CEA)",
    desc: ""
  },
  {
    id: "29",
    type_id: "4",
    en: "Ovarian and Utarine Tumor Markers (CA-125)",
    ar: "دالالات أورام رحم و مبيض (CA-125)",
    desc: ""
  },
  {
    id: "30",
    type_id: "4",
    en: "General Tumor Markers (CEA)",
    ar: "دالالات اورام عامة (CEA)",
    desc: ""
  },
  {
    id: "31",
    type_id: "4",
    en: "Prostate Tumor Markers (PSA-Total)",
    ar: "دالالات أورام البروستاتا (PSA-Total)",
    desc: ""
  },
  {
    id: "32",
    type_id: "5",
    en: "Serum Creatinine",
    ar: "تحليل الكرياتين",
    desc: ""
  },
  {
    id: "33",
    type_id: "5",
    en: "Uric Acid",
    ar: "تحليل حمض اليوريك",
    desc: ""
  },
  {
    id: "34",
    type_id: "5",
    en: "Kidney Function Tests (Creatinine, Blood Urea, Uric Acid)",
    ar: "(تحاليل وظائف كلي شاملة (الكرياتين, بولينا الدم, حمض اليوريك",
    desc: ""
  },
  {
    id: "35",
    type_id: "5",
    en: "Blood Urea",
    ar: "بولينا الدم",
    desc: ""
  },
  {
    id: "36",
    type_id: "6",
    en: "SGPT/AST",
    ar: "تحليل AST/SGPT",
    desc: ""
  },
  {
    id: "37",
    type_id: "6",
    en: "Direct Bilirubin",
    ar: "تحليل البيليروبين مباشر",
    desc: ""
  },
  {
    id: "38",
    type_id: "6",
    en: "Total Protein",
    ar: "تحليل البروتين فى الدم",
    desc: ""
  },
  {
    id: "39",
    type_id: "6",
    en: "Total Bilirubin",
    ar: "تحليل البيليروبين كامل",
    desc: ""
  },
  {
    id: "40",
    type_id: "6",
    en: "Bilrubin Indirect",
    ar: "Bilrubin غير مباشر",
    desc: ""
  },
  {
    id: "41",
    type_id: "6",
    en: "Alkaline Phosphatase",
    ar: "الفوسفاتاز القلوي",
    desc: ""
  },
  {
    id: "42",
    type_id: "6",
    en: "Bilirubin (Direct)",
    ar: "بيليروبين (مباشر)",
    desc: ""
  },
  {
    id: "43",
    type_id: "6",
    en: "Albumin",
    ar: "تحليل البومين",
    desc: ""
  },
  {
    id: "44",
    type_id: "6",
    en: "Glucose Tolerance Test (GGT)",
    ar: "تحليل GGT",
    desc: ""
  },
  {
    id: "45",
    type_id: "6",
    en: "SGOT/ALT",
    ar: "تحليل ALT/SGOT",
    desc: ""
  },
  {
    id: "46",
    type_id: "6",
    en: "Bile Acid Total",
    ar: "حمض الصفراء (المجموع)",
    desc: ""
  },
  {
    id: "47",
    type_id: "6",
    en: "Liver Function Tests(SGPT, SGOT, GGT, TP, AP, Albumin, Bilirubin)",
    ar:
      "تحاليل وظائف الكبد شاملة (SGPT, SGOT, GGT, TP, AP, البومين, البيليروبين)",
    desc: ""
  },
  {
    id: "48",
    type_id: "6",
    en: "Bilirubin (Total)",
    ar: "بيليروبين (مجموع)",
    desc: ""
  },
  {
    id: "49",
    type_id: "7",
    en: "Hair Fall",
    ar: "تساقط الشعر",
    desc: ""
  },
  {
    id: "50",
    type_id: "7",
    en: "Allergy Food Panel 30",
    ar: "حساسية الطعام",
    desc: ""
  },
  {
    id: "51",
    type_id: "7",
    en: "Allergy Inhalent Panel 30",
    ar: "حساسية الانف",
    desc: ""
  },
  {
    id: "52",
    type_id: "8",
    en: "Lipoprotein Electrophoresis",
    ar: "البروتين الدهني الكهربائي",
    desc: ""
  },
  {
    id: "53",
    type_id: "8",
    en: "Lipid Function Tests (TG/HDL/LDL/Cholesterol)",
    ar: "تحاليل الدهون بالدم شاملة (TG/HDL/LDL/Cholesterol)",
    desc: ""
  },
  {
    id: "54",
    type_id: "8",
    en: "Low Density Lipoprotein (LDL)",
    ar: "تحليل LDL",
    desc: ""
  },
  {
    id: "55",
    type_id: "8",
    en: "High Density Lipoprotein (HDL)",
    ar: "تحليل HDL",
    desc: ""
  },
  {
    id: "56",
    type_id: "8",
    en: "Total Cholesterol",
    ar: "تحليل الكوليسترول",
    desc: ""
  },
  {
    id: "57",
    type_id: "8",
    en: "Trigylcerides",
    ar: "تحليل الدهون الثلاثية",
    desc: ""
  },
  {
    id: "58",
    type_id: "9",
    en: "House Call 35",
    ar: "دعوة البيت 35",
    desc: ""
  },
  {
    id: "59",
    type_id: "9",
    en: "IgG Level (Serum)",
    ar: "مفتش مستوى (المصل)",
    desc: ""
  },
  {
    id: "60",
    type_id: "9",
    en: "Cortisol In Urine",
    ar: "الكورتيزول في البول",
    desc: ""
  },
  {
    id: "61",
    type_id: "9",
    en: "La (SS-B)",
    ar: "لا (SS-B)",
    desc: ""
  },
  {
    id: "62",
    type_id: "9",
    en: "HLA Class I (A&B)",
    ar: "HLA من الدرجة الأولى (A & B)",
    desc: ""
  },
  {
    id: "63",
    type_id: "9",
    en: "HSV - 1 IgM",
    ar: "HSV - 1 IgM 2",
    desc: ""
  },
  {
    id: "64",
    type_id: "9",
    en: "Amaebic ab1",
    ar: "Amaebic ab2",
    desc: ""
  },
  {
    id: "65",
    type_id: "9",
    en: "Anti Parietal Cell Antibodies (APCA)",
    ar: "الأجسام المضادة للخلية الجدارية (APCA)",
    desc: ""
  },
  {
    id: "66",
    type_id: "9",
    en: "Anti Nuclear Ab Titre (ELISA)",
    ar: "مكافحة النواة النووية (ELISA)",
    desc: ""
  },
  {
    id: "67",
    type_id: "9",
    en: "Anti Islet Cells Antibodies",
    ar: "الأجسام المضادة لخلايا الجزر",
    desc: ""
  },
  {
    id: "68",
    type_id: "9",
    en: "EBV-EA (IgM)1",
    ar: "EBV-EA (IgM)2",
    desc: ""
  },
  {
    id: "69",
    type_id: "9",
    en: "Aminogram (Plasma)",
    ar: "أمينوغرام (بلازما)",
    desc: ""
  },
  {
    id: "70",
    type_id: "9",
    en: "TORCH (IgG) (Toxo/Rub/CMV/HSV 1&2)",
    ar: "TORCH (IgG) (Toxo / Rub / CMV / HSV 1 & 2)",
    desc: ""
  },
  {
    id: "71",
    type_id: "9",
    en: "Anticardiolipin IgG",
    ar: "المضاد الحيوي IgG",
    desc: ""
  },
  {
    id: "72",
    type_id: "9",
    en: "Ro (SS-A)",
    ar: "رو (SS-A)",
    desc: ""
  },
  {
    id: "73",
    type_id: "9",
    en: "Complement C3 in Serum",
    ar: "تكملة C3 في المصل",
    desc: ""
  },
  {
    id: "74",
    type_id: "9",
    en: "HBs Ab",
    ar: "HBs Ab 2",
    desc: ""
  },
  {
    id: "75",
    type_id: "9",
    en: "EBV-EA (IgG)",
    ar: "EBV-EA (IgG)",
    desc: ""
  },
  {
    id: "76",
    type_id: "9",
    en: "Toxoplasma Antibodies (IgM)",
    ar: "أجسام التوكسوبلازما (IgM)",
    desc: ""
  },
  {
    id: "77",
    type_id: "9",
    en: "Rubella Antibodies (IgM)",
    ar: "الأجسام المضادة للحصبة الألمانية (IgM)",
    desc: ""
  },
  {
    id: "78",
    type_id: "9",
    en: "House Call 25",
    ar: "دعوة البيت 25",
    desc: ""
  },
  {
    id: "79",
    type_id: "9",
    en: "Gamma GT (GGT)",
    ar: "جاما جي تي (GGT)",
    desc: ""
  },
  {
    id: "80",
    type_id: "9",
    en: "HLA Typing (Class II Antigens)",
    ar: "HLA Typing (الفئة الثانية مستضدات)",
    desc: ""
  },
  {
    id: "81",
    type_id: "9",
    en: "Estradiol (E2)",
    ar: "استراديول (E2)",
    desc: ""
  },
  {
    id: "82",
    type_id: "9",
    en: "HBs Antigen",
    ar: "HBs Antigen 2",
    desc: ""
  },
  {
    id: "83",
    type_id: "9",
    en: "Leptospira Ab (IgM)",
    ar: "ليبتوسيرا أب (IgM)",
    desc: ""
  },
  {
    id: "84",
    type_id: "9",
    en: "PAP Smear",
    ar: "مسحة عنق الرحم",
    desc: ""
  },
  {
    id: "85",
    type_id: "9",
    en: "CMV Antibodies (IgM)",
    ar: "الأجسام المضادة CMV (IgM)",
    desc: ""
  },
  {
    id: "86",
    type_id: "9",
    en: "Toxoplasma Antibodies (IgG)",
    ar: "أجسام التوكسوبلازما (IgG)",
    desc: ""
  },
  {
    id: "87",
    type_id: "9",
    en: "EBV-EBNA (IgG)",
    ar: "EBV-EBNA (IgG)2",
    desc: ""
  },
  {
    id: "88",
    type_id: "9",
    en: "Serum Aldolase",
    ar: "مصل الدولاس",
    desc: ""
  },
  {
    id: "89",
    type_id: "9",
    en: "Chlamydia Antibodies (IgG)",
    ar: "الكلاميديا ​​الأجسام المضادة (مفتش)",
    desc: ""
  },
  {
    id: "90",
    type_id: "9",
    en: "Biopsy Sample",
    ar: "عينة خزعة",
    desc: ""
  },
  {
    id: "91",
    type_id: "9",
    en: "Anti Mitochondrial Antibodies (AMA)",
    ar: "أضداد الميتوكوندريا (AMA)",
    desc: ""
  },
  {
    id: "92",
    type_id: "9",
    en: "Anti Neutrophil Cytoplasmic Ab (ANCA)",
    ar: "مكافحة العدلات السيتوبلازم أب (ANCA)",
    desc: ""
  },
  {
    id: "93",
    type_id: "9",
    en: "Beta Human Chorionic Gonadotropin- BHCG",
    ar: "بيتا الإنسان موجهة الغدد التناسلية المشيمية- BHCG",
    desc: ""
  },
  {
    id: "94",
    type_id: "9",
    en: "Anti Microsomal Antibodies",
    ar: "الأجسام المضادة المضادة للجراثيم",
    desc: ""
  },
  {
    id: "95",
    type_id: "9",
    en: "Anti Smith Antibodies",
    ar: "الأجسام المضادة سميث",
    desc: ""
  },
  {
    id: "96",
    type_id: "9",
    en: "IgA Level (Serum)",
    ar: "ايغا المستوى (المصل)",
    desc: ""
  },
  {
    id: "97",
    type_id: "9",
    en: "Dihydrotestosterone (DHT)",
    ar: "ديهيدروتستوستيرون (دهت)",
    desc: ""
  },
  {
    id: "98",
    type_id: "9",
    en: "Androstenedione",
    ar: "الاندروستيرون",
    desc: ""
  },
  {
    id: "99",
    type_id: "9",
    en: "HBc Antibodies Total",
    ar: "مجموع الأجسام المضادة لـ HBc",
    desc: ""
  },
  {
    id: "100",
    type_id: "9",
    en: "Complement : CH 50",
    ar: "تكملة: CH 50",
    desc: ""
  },
  {
    id: "101",
    type_id: "9",
    en: "Anti Nuclear Antibodies Titre & Pattern (mmunoflourescence)",
    ar: "الأجسام المضادة النووية ونمط ونمط (المناعي)",
    desc: ""
  },
  {
    id: "102",
    type_id: "9",
    en: "Rheumatoid Factor (Rose-Waaler)",
    ar: "عامل الروماتويد (روز-فالر)",
    desc: ""
  },
  {
    id: "103",
    type_id: "9",
    en: "HBe Antigen",
    ar: "HBe Antigen 2",
    desc: ""
  },
  {
    id: "104",
    type_id: "9",
    en: "HSV - 1 IgG",
    ar: "HSV - 1 IgG 2",
    desc: ""
  },
  {
    id: "105",
    type_id: "9",
    en: "Biopsy- 2 Samples",
    ar: "خزعة - 2 عينات",
    desc: ""
  },
  {
    id: "106",
    type_id: "9",
    en: "Anti RNP",
    ar: "مكافحة RNP",
    desc: ""
  },
  {
    id: "107",
    type_id: "9",
    en: "HSV - 2 IgG",
    ar: "HSV - 2 IgG 2",
    desc: ""
  },
  {
    id: "108",
    type_id: "9",
    en: "A/G Ratio",
    ar: "نسبة A / G",
    desc: ""
  },
  {
    id: "109",
    type_id: "9",
    en: "H Pylori",
    ar: "جرثومة المعدة",
    desc: ""
  },
  {
    id: "110",
    type_id: "9",
    en: "Antithyroid Antibodies",
    ar: "أضداد الغدة الدرقية",
    desc: ""
  },
  {
    id: "111",
    type_id: "9",
    en: "B-HCG (Tumour Marker)",
    ar: "B-HCG (علامة الورم)",
    desc: ""
  },
  {
    id: "112",
    type_id: "9",
    en: "IgE Level (Total)",
    ar: "مستوى IgE (المجموع)",
    desc: ""
  },
  {
    id: "113",
    type_id: "9",
    en: "5.Nucleotidase-1",
    ar: "5-Nucleotidase-2",
    desc: ""
  },
  {
    id: "114",
    type_id: "9",
    en: "Anti Sperm Antibodies (Serum)",
    ar: "الأجسام المضادة للحيوانات المنوية (المصل)",
    desc: ""
  },
  {
    id: "115",
    type_id: "9",
    en: "Intrinsic Factor Antibody",
    ar: "عامل جوهري الأجسام المضادة",
    desc: ""
  },
  {
    id: "116",
    type_id: "9",
    en: "RIBA Test For HCV",
    ar: "الربا اختبار ل HCV",
    desc: ""
  },
  {
    id: "117",
    type_id: "9",
    en: "CD",
    ar: "القرص المضغوط",
    desc: ""
  },
  {
    id: "118",
    type_id: "9",
    en: "Casein IgG",
    ar: "الكازين مفتش",
    desc: ""
  },
  {
    id: "119",
    type_id: "9",
    en: "CMV Antibodies (IgG)",
    ar: "الأجسام المضادة CMV (IgG)",
    desc: ""
  },
  {
    id: "120",
    type_id: "9",
    en: "TORCH (IgM) (Toxo/Rub/CMV/HSV 1&2)",
    ar: "TORCH (IgM) (Toxo / Rub / CMV / HSV 1 & 2)",
    desc: ""
  },
  {
    id: "121",
    type_id: "9",
    en: "Liver Kidney Microsome ( Anti LKM)",
    ar: "الكبد الكلى Microsome (مكافحة LKM)",
    desc: ""
  },
  {
    id: "122",
    type_id: "9",
    en: "Catecholamines in Urine",
    ar: "الكاتيكولامينات في البول",
    desc: ""
  },
  {
    id: "123",
    type_id: "9",
    en: "CK (Total)",
    ar: "CK (المجموع)",
    desc: ""
  },
  {
    id: "124",
    type_id: "9",
    en: "HBe Antibody",
    ar: "HBe الأجسام المضادة",
    desc: ""
  },
  {
    id: "125",
    type_id: "9",
    en: "Rheumatoid Factor (Titre)",
    ar: "عامل الروماتويد (عيار)",
    desc: ""
  },
  {
    id: "126",
    type_id: "9",
    en: "Transferrin Saturation",
    ar: "ترانسفيرين تشبع",
    desc: ""
  },
  {
    id: "127",
    type_id: "9",
    en: "Anticardiolipin IgM",
    ar: "مضاد الكارديوليبين IgM",
    desc: ""
  },
  {
    id: "128",
    type_id: "9",
    en: "House Call 50",
    ar: "دعوة البيت 50",
    desc: ""
  },
  {
    id: "129",
    type_id: "9",
    en: "ANTI MCV",
    ar: "مكافحة MCV",
    desc: ""
  },
  {
    id: "130",
    type_id: "9",
    en: "Anti Sperm Antibodies (Semen)",
    ar: "الأجسام المضادة للحيوانات المنوية (المني)",
    desc: ""
  },
  {
    id: "131",
    type_id: "9",
    en: "HLA B27",
    ar: "HLA B27",
    desc: ""
  },
  {
    id: "132",
    type_id: "9",
    en: "HSV- 2 IgM",
    ar: "HSV - 2 IgM 2",
    desc: ""
  },
  {
    id: "133",
    type_id: "9",
    en: "EBV-VCA (IgM)",
    ar: "EBV-VCA (IgM)2",
    desc: ""
  },
  {
    id: "134",
    type_id: "9",
    en: "IgM Level (Serum)",
    ar: "مستوى الغلوبولين المناعي (المصل)",
    desc: ""
  },
  {
    id: "135",
    type_id: "9",
    en: "Anti Smooth Muscle Antibodies (ASMA)",
    ar: "الأجسام المضادة العضلات الملساء (ASMA)",
    desc: ""
  },
  {
    id: "136",
    type_id: "9",
    en: "Varicella Zoster Antibodies (IgM)",
    ar: "أضداد الحماق المضاد للحمى (IgM)",
    desc: ""
  },
  {
    id: "137",
    type_id: "9",
    en: "HCV Antibody 3rd Generation",
    ar: "HCV الأجسام المضادة الجيل الثالث",
    desc: ""
  },
  {
    id: "138",
    type_id: "9",
    en: "C-Reactive Protein (CRP) Latex",
    ar: "C - رد الفعل البروتين (CRP) اللاتكس",
    desc: ""
  },
  {
    id: "139",
    type_id: "9",
    en: "ACTH (AM)",
    ar: "ACTH (AM)2",
    desc: ""
  },
  {
    id: "140",
    type_id: "9",
    en: "CK-MB-1",
    ar: "CK-MB-2",
    desc: ""
  },
  {
    id: "141",
    type_id: "9",
    en: "Anti-Jo Antibodies",
    ar: "الأجسام المضادة لجو",
    desc: ""
  },
  {
    id: "142",
    type_id: "9",
    en: "Rubella Antibodies (IgG)",
    ar: "الأجسام المضادة للحصبة الألمانية (IgG)",
    desc: ""
  },
  {
    id: "143",
    type_id: "9",
    en: "Gluten IgG",
    ar: "الغلوتين مفتش",
    desc: ""
  },
  {
    id: "144",
    type_id: "9",
    en: "Sacchromyces Cerevisiae ABS IgA (ASCA)1",
    ar: "Sacchromyces Cerevisiae ABS IgA (ASCA)2",
    desc: ""
  },
  {
    id: "145",
    type_id: "9",
    en: "Serum DHEA-S",
    ar: "مصل DHEA-S",
    desc: ""
  },
  {
    id: "146",
    type_id: "9",
    en: "Western Blot For HIV",
    ar: "لطخة غربية لفيروس نقص المناعة البشرية",
    desc: ""
  },
  {
    id: "147",
    type_id: "9",
    en: "Calcitonin (Thyro-Calcitonin)",
    ar: "كالسيتونين (ثيرو-كالسيتونين)",
    desc: ""
  },
  {
    id: "148",
    type_id: "9",
    en: "Anti DNA (Anti-ds-DNA)",
    ar: "مكافحة الحمض النووي (مكافحة الحمض النووي DNA)",
    desc: ""
  },
  {
    id: "149",
    type_id: "9",
    en: "HBc Antibodies IgM",
    ar: "HBc الأجسام المضادة IgM",
    desc: ""
  },
  {
    id: "150",
    type_id: "9",
    en: "Prostatic Specific Antigen (Total)",
    ar: "مستضد البروستات النوعي (المجموع)",
    desc: ""
  },
  {
    id: "151",
    type_id: "10",
    en: "Cortisol 9 PM in Serum",
    ar: "الكورتيزول 9 مساء في المصل",
    desc: ""
  },
  {
    id: "152",
    type_id: "10",
    en: "Growth Hormone (GH)",
    ar: "تحليل هرمون النمو",
    desc: ""
  },
  {
    id: "153",
    type_id: "10",
    en: "Prolactin Hormone",
    ar: "تحليل هرمون البرولاكتين",
    desc: ""
  },
  {
    id: "154",
    type_id: "10",
    en: "Hormonal Tests (GH, Progesterone, Estrogen, Testestorone, Prolactin)",
    ar:
      "تحاليل الهرمونات شاملة (GH, البروجسترون, البرولاكتين, الاستروجين, التستوستيرون)",
    desc: ""
  },
  {
    id: "155",
    type_id: "10",
    en: "Progesteron Hormone",
    ar: "تحليل هرمون البروجسترون",
    desc: ""
  },
  {
    id: "156",
    type_id: "10",
    en: "Progesterone",
    ar: "البروجسترون",
    desc: ""
  },
  {
    id: "157",
    type_id: "10",
    en: "Testestorone Hormone",
    ar: "تحليل هرمون التستوستيرون",
    desc: ""
  },
  {
    id: "158",
    type_id: "10",
    en: "Prolactin (PRL)",
    ar: "البرولاكتين (PRL)",
    desc: ""
  },
  {
    id: "159",
    type_id: "10",
    en: "Parathyroid Hormone (PTH)",
    ar: "هرمون الغدة الدرقية (PTH)",
    desc: ""
  },
  {
    id: "160",
    type_id: "10",
    en: "Cortisol 9 AM in Serum",
    ar: "الكورتيزول 9 ص في المصل",
    desc: ""
  },
  {
    id: "161",
    type_id: "10",
    en: "Estrongen Hormone",
    ar: "تحليل هرمون الاستروجين",
    desc: ""
  },
  {
    id: "162",
    type_id: "10",
    en: "Acid Phosphatase (Prostatic)",
    ar: "حمض الفوسفاتيز (البروستات)",
    desc: ""
  },
  {
    id: "163",
    type_id: "10",
    en: "Acid Phosphatase (Total)",
    ar: "حمض الفوسفاتيز (المجموع)",
    desc: ""
  },
  {
    id: "164",
    type_id: "11",
    en: "Plasma Glucose (Random)",
    ar: "الجلوكوز في البلازما (عشوائي)",
    desc: ""
  },
  {
    id: "165",
    type_id: "11",
    en: "Blood Sugar Tests (FBS, RBS, PPBS, HbA1C)",
    ar: "تحاليل مرض السكر شاملة (FBS, RBS,PPBS, HbA1C)",
    desc: ""
  },
  {
    id: "166",
    type_id: "11",
    en: "Fasting Blood Sugar (FBS)",
    ar: "تحليل السكر صائم",
    desc: ""
  },
  {
    id: "167",
    type_id: "11",
    en: "Glycosylated haemoglobin (HbA1C)",
    ar: "HbA1C تحليل",
    desc: ""
  },
  {
    id: "168",
    type_id: "11",
    en: "Plasma Glucose 2hrs PP",
    ar: "البلازما الجلوكوز ساعتين PP",
    desc: ""
  },
  {
    id: "169",
    type_id: "11",
    en: "Random Blood Sugar (RBS)",
    ar: "تحليل سكر عشوائي",
    desc: ""
  },
  {
    id: "170",
    type_id: "11",
    en: "Fasting Plasma Glucose",
    ar: "الصيام، مادة البلازما، مادة القلوكوز",
    desc: ""
  },
  {
    id: "171",
    type_id: "11",
    en: "Glucose Tolerance Test (Pregnancy)",
    ar: "اختبار تحمل الجلوكوز (الحمل)",
    desc: ""
  },
  {
    id: "172",
    type_id: "11",
    en: "Post Prandial Blood Sugar (PPBS)",
    ar: "تحليل سكر فاطر",
    desc: ""
  },
  {
    id: "173",
    type_id: "12",
    en: "Basic Checkup",
    ar: "الفحص الطبي الأساسي",
    desc: ""
  },
  {
    id: "174",
    type_id: "12",
    en: "Checkup Package",
    ar: "فحص شامل",
    desc: ""
  },
  {
    id: "175",
    type_id: "13",
    en: "Ferritin in Serum",
    ar: "فيريتين في المصل",
    desc: ""
  },
  {
    id: "176",
    type_id: "13",
    en: "Serum Globulin",
    ar: "مصل الجلوبيولين",
    desc: ""
  },
  {
    id: "177",
    type_id: "13",
    en: "Serum Chloride",
    ar: "كلوريد المصل",
    desc: ""
  },
  {
    id: "178",
    type_id: "13",
    en: "Serum Amylase",
    ar: "مصل الأميليز",
    desc: ""
  },
  {
    id: "179",
    type_id: "13",
    en: "Serum Magnesium",
    ar: "مصل المغنيسيوم",
    desc: ""
  },
  {
    id: "180",
    type_id: "13",
    en: "Serum Albumin",
    ar: "مصل الزلال",
    desc: ""
  },
  {
    id: "181",
    type_id: "13",
    en: "IgD",
    ar: "الجمعية الإسلامية",
    desc: ""
  },
  {
    id: "182",
    type_id: "13",
    en: "Renin (Activity), Plasma",
    ar: "رينين (نشاط) ، بلازما",
    desc: ""
  },
  {
    id: "183",
    type_id: "13",
    en: "Blood Count Tests (CBC, LDH, ESR)",
    ar: "تحاليل صورة الدم شاملة (CBC, LDH, ESR)",
    desc: ""
  },
  {
    id: "184",
    type_id: "13",
    en: "Blood Urea",
    ar: "يوريا الدم",
    desc: ""
  },
  {
    id: "185",
    type_id: "13",
    en: "Serum Calcium (Total)",
    ar: "مصل الكالسيوم (المجموع)",
    desc: ""
  },
  {
    id: "186",
    type_id: "13",
    en: "LDH",
    ar: "تحليل LDH",
    desc: ""
  },
  {
    id: "187",
    type_id: "13",
    en: "Lipase Level in Serum",
    ar: "مستوى الليباز في المصل",
    desc: ""
  },
  {
    id: "188",
    type_id: "13",
    en: "Blood Urea Nitrogen",
    ar: "نيتروجين اليوريا في الدم",
    desc: ""
  },
  {
    id: "189",
    type_id: "13",
    en: "Theophylline Level",
    ar: "مستوى الثيوفيلين",
    desc: ""
  },
  {
    id: "190",
    type_id: "13",
    en: "Fructosamine (Serum)",
    ar: "فركتوزامين (مصل)",
    desc: ""
  },
  {
    id: "191",
    type_id: "13",
    en: "Cocaine In Urine",
    ar: "الكوكايين في البول",
    desc: ""
  },
  {
    id: "192",
    type_id: "13",
    en: "Serum Sodium and Potassium",
    ar: "مصل الصوديوم والبوتاسيوم",
    desc: ""
  },
  {
    id: "193",
    type_id: "13",
    en: "Erythrocyte Sedimentation Rate(ESR)",
    ar: "تحليل سرعة الترسيب",
    desc: ""
  },
  {
    id: "194",
    type_id: "13",
    en: "Methotrexate Level in Serum",
    ar: "الميثوتريكسيت المستوى في المصل",
    desc: ""
  },
  {
    id: "195",
    type_id: "13",
    en: "Serum Bicarbonates",
    ar: "بيكربونات المصل",
    desc: ""
  },
  {
    id: "196",
    type_id: "13",
    en: "Serum Osmolality",
    ar: "المصل الأسمولية",
    desc: ""
  },
  {
    id: "197",
    type_id: "13",
    en: "Complete Blood Count (CBC)",
    ar: "تحليل CBC",
    desc: ""
  },
  {
    id: "198",
    type_id: "13",
    en: "Chloride In Serum",
    ar: "كلوريد في المصل",
    desc: ""
  },
  {
    id: "199",
    type_id: "13",
    en: "Serum Potassium (K)",
    ar: "مصل البوتاسيوم (K)",
    desc: ""
  },
  {
    id: "200",
    type_id: "13",
    en: "Lithium Level In Serum",
    ar: "مستوى الليثيوم في المصل",
    desc: ""
  },
  {
    id: "201",
    type_id: "13",
    en: "Serum Protein Electrophoresis",
    ar: "مصل البروتين الكهربائي",
    desc: ""
  },
  {
    id: "202",
    type_id: "13",
    en: "WBC Count - Total & Differential",
    ar: "عدد كرات الدم البيضاء - المجموع والتفاضلي",
    desc: ""
  },
  {
    id: "203",
    type_id: "13",
    en: "Platelet Count",
    ar: "عدد الصفائح الدموية",
    desc: ""
  },
  {
    id: "204",
    type_id: "13",
    en: "Magnesium In Urine/24 Hrs",
    ar: "المغنيسيوم في البول / 24 ساعة",
    desc: ""
  },
  {
    id: "205",
    type_id: "13",
    en: "Copper In Blood",
    ar: "النحاس في الدم",
    desc: ""
  },
  {
    id: "206",
    type_id: "13",
    en: "Serum Sodium (Na)",
    ar: "مصل الصوديوم (نا)",
    desc: ""
  },
  {
    id: "207",
    type_id: "13",
    en: "Lead In Blood",
    ar: "الرصاص في الدم",
    desc: ""
  },
  {
    id: "208",
    type_id: "13",
    en: "Blood PH",
    ar: "درجة الحموضة في الدم",
    desc: ""
  },
  {
    id: "209",
    type_id: "14",
    en: "Stool Culture with Sensitivity",
    ar: "تحليل مزرعة براز",
    desc: ""
  },
  {
    id: "210",
    type_id: "14",
    en: "Urine Culture For Fungi",
    ar: "البول الثقافة للفطريات",
    desc: ""
  },
  {
    id: "211",
    type_id: "14",
    en: "Aminogram (Urine)",
    ar: "أمينوغرام (البول)",
    desc: ""
  },
  {
    id: "212",
    type_id: "14",
    en: "Phosphorus In 24-Hr Urine",
    ar: "الفوسفور في البول على مدار 24 ساعة",
    desc: ""
  },
  {
    id: "213",
    type_id: "14",
    en: "Creatinine Clearance",
    ar: "تنقية الدم من الكرياتنين",
    desc: ""
  },
  {
    id: "214",
    type_id: "14",
    en: "Anal Swab",
    ar: "مسحة الشرج",
    desc: ""
  },
  {
    id: "215",
    type_id: "14",
    en: "B2-Microglobulin (Serum)",
    ar: "B2 - ميكروغلوبولين (مصل)",
    desc: ""
  },
  {
    id: "216",
    type_id: "14",
    en: "Phenytoin (Epanutin) Peak",
    ar: "Phenytoin (Epanutin) الذروة",
    desc: ""
  },
  {
    id: "217",
    type_id: "14",
    en: "Opiates (Heroin) In Urine",
    ar: "الأفيونيات (الهيروين) في البول",
    desc: ""
  },
  {
    id: "218",
    type_id: "14",
    en: "Stool Analysis",
    ar: "تحليل البراز",
    desc: ""
  },
  {
    id: "219",
    type_id: "14",
    en:
      "Urine and Stool Tests (Urine & Stool analysis, Urine and Stool culture)",
    ar: "(تحاليل بول وبراز شاملة (تحليل البول و البراز, مزرعة البول والبراز",
    desc: ""
  },
  {
    id: "220",
    type_id: "14",
    en: "Oxalate In 24-Hr Urine",
    ar: "أوكسالات في البول لمدة 24 ساعة",
    desc: ""
  },
  {
    id: "221",
    type_id: "14",
    en: "Pregnancy Test in Urine",
    ar: "اختبار الحمل في البول",
    desc: ""
  },
  {
    id: "222",
    type_id: "14",
    en: "Urine Analysis",
    ar: "تحليل البول",
    desc: ""
  },
  {
    id: "223",
    type_id: "14",
    en: "Urine Culture with Sensitivty",
    ar: "مزرعة البول",
    desc: ""
  },
  {
    id: "224",
    type_id: "14",
    en: "B2-Microglobulin (Urine)",
    ar: "B2-Microglobulin (البول)",
    desc: ""
  },
  {
    id: "225",
    type_id: "14",
    en: "Ionized Calcium (Ca++)",
    ar: "الكالسيوم المتأين (Ca ++)",
    desc: ""
  },
  {
    id: "226",
    type_id: "14",
    en: "Vanilmandelic Acid In Urine (VMA)",
    ar: "حمض الفانيلمانديليك في البول (VMA)",
    desc: ""
  },
  {
    id: "227",
    type_id: "14",
    en: "Oxalate In 24-Hr Urine",
    ar: "أوكسالات في البول لمدة 24 ساعة",
    desc: ""
  },
  {
    id: "228",
    type_id: "14",
    en: "Occulate Blood in Stool",
    ar: "تحليل الدم الخفى فى البراز",
    desc: ""
  },
  {
    id: "229",
    type_id: "14",
    en: "17 Ketosteroids In Urine",
    ar: "17 الكيتوسترويدات في البول",
    desc: ""
  },
  {
    id: "230",
    type_id: "14",
    en: "Copper In Urine",
    ar: "النحاس في البول",
    desc: ""
  },
  {
    id: "231",
    type_id: "14",
    en: "Microalbuminuria (24 Hrs Urine Collection)",
    ar: "بيلة دقيقة (مجموعة البول على مدار 24 ساعة)",
    desc: ""
  },
  {
    id: "232",
    type_id: "15",
    en: "Virus A IgM (HAV-IgM)",
    ar: "تحليل IGM",
    desc: ""
  },
  {
    id: "233",
    type_id: "15",
    en: "VCytomegalovirus (CMV)",
    ar: "تحليل CMV",
    desc: ""
  },
  {
    id: "234",
    type_id: "15",
    en: "Herpes Simplex Virus By PCR (1&2)",
    ar: "فيروس الهربس البسيط بواسطة PCR (1 و 2)",
    desc: ""
  },
  {
    id: "235",
    type_id: "15",
    en: "Virus Rubella",
    ar: "تحليل Rubella IGG",
    desc: ""
  },
  {
    id: "236",
    type_id: "15",
    en: "Epstein Barr Virus (EBV)",
    ar: "تحليل EBV",
    desc: ""
  },
  {
    id: "237",
    type_id: "15",
    en: "Virus A IgG (HAV-IgG)",
    ar: "تحليل IGA",
    desc: ""
  },
  {
    id: "238",
    type_id: "15",
    en: "Virus Aids (HIV Ab)",
    ar: "تحليل الأيدز",
    desc: ""
  },
  {
    id: "239",
    type_id: "15",
    en: "Virus B (HBs Ag)",
    ar: "تحليل فيروس بي",
    desc: ""
  },
  {
    id: "240",
    type_id: "15",
    en: "Anti Bilharzial Antibodies (IHA)",
    ar: "الأجسام المضادة للبلهارسيا (IHA)",
    desc: ""
  },
  {
    id: "241",
    type_id: "15",
    en: "Virus Toxoplasma",
    ar: "تحليل Toxoplasma",
    desc: ""
  },
  {
    id: "242",
    type_id: "15",
    en: "Human Papilloma Virus",
    ar: "فيروس الورم الحليمي البشري",
    desc: ""
  },
  {
    id: "243",
    type_id: "15",
    en: "Virology Tests (HCV - Ab, HBs Ag, HAV - IgG, HAV - IgM)",
    ar: "تحاليل فيروسات شاملة (HCV - Ab, HBs Ag, HAV - IgG, HAV - IgM)",
    desc: ""
  },
  {
    id: "244",
    type_id: "15",
    en: "Virus C (HCV-Ab)",
    ar: "تحليل فيروس سى",
    desc: ""
  }
];

export { types, tests };
