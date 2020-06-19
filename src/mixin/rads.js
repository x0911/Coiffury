let rads = {
  "Ultrasound & Doppler": {
    "HEAD & NECK": ["Head", "Middle Cerebral Doppler", "Neck (Thyroid)"],
    BREAST: [
      "Breast Lesion Localization",
      "Breast",
      "Breast & Axilla",
      "Breast Core Biopsy",
      "FNA Breast"
    ],
    ABDOMEN: [
      "All Abdomen",
      "Upper Abdomen",
      "Umbilical Artery Doppler",
      "K.U.B.",
      "Renal Doppler",
      "Hepatic Portal Vein Doppler",
      "Abscess Drainage Abdomen",
      "Ascetic Drain Placement"
    ],
    PELVIS: [
      "Pelvis",
      "Hip Joint",
      "Trans Rectal",
      "Testis Doppler",
      "Trans Vaginal",
      "Fetal",
      "Uterine Artery Doppler"
    ],
    "UPPER EXTREMITY": [
      "Upper Limb Doppler",
      "Upper Limb Arteries & Veins Doppler"
    ],
    "LOWER EXTREMITY": [
      "Lower Limb Doppler",
      "Lower Limb Arteries & Veins Doppler"
    ],
    "FINE NEEDLE ASPIRATION": ["FNA Neck", "FNA Thyroid", "Guided Aspiration"],
    OTHERS: ["Echocardiography", "Skin Marking", "Organ", "New Marriage"]
  },
  MRI: {
    "HEAD & NECK": [
      "Brain",
      "Angiography (MRA) Head",
      "Venography (MRV) Brain",
      "Paranasal Sinuses",
      "Int. Auditory Meatus (IAM)",
      "Parotid Gland",
      "Pituitary With Contrast",
      "Orbit",
      "Face",
      "Mastoids",
      "Brachial Plexus",
      "Temporomandibular (TM) Joint",
      "Neck",
      "Angiography (MRA) Neck"
    ],
    SPINE: ["Cervical", "Lumbar", "Thoracic", "Whole Spine"],
    CHEST: ["Chest", "Breast With Contrast"],
    ABDOMEN: ["Cholangiopancreatography (MRCP)", "Abdomen"],
    PELVIS: ["Pelvis", "Sacroliac Joints", "Hip Joints", "Fistula"],
    "UPPER EXTREMITY": ["Shoulder", "Arm", "Elbow", "Forearm", "Wrist", "Hand"],
    "LOWER EXTREMITY": ["Thigh", "Femur", "Knee", "Leg", "Ankle", "Foot"],
    "COMBINATION EXAMINATIONS": [
      "Cervical & Lumbar",
      "Thoracic & Lumbar",
      "Cervical & Thoracic",
      "Abdomen & Pelvis",
      "Brain & Orbit"
    ],
    CONTRAST: ["Contrast"]
  },
  "CT +3D": {
    "HEAD & NECK": [
      "Skull",
      "Brain",
      "Paranasal Sinuses (PNS)",
      "Orbit",
      "Face",
      "Mastoids",
      "Temporal Bone",
      "Neck"
    ],
    SPINE: ["Cervical", "Lumbar", "Thoracic", "Whole Spine", "Myelogram"],
    CHEST: ["Chest", "High Resolution Computed Tomography (HRCT)"],
    ABDOMEN: [
      "Abdomen",
      "K.U.B.",
      "Urogram With Contrast",
      "Pneumocolon With Contrast"
    ],
    PELVIS: ["Pelvis", "Hip Joint", "Sacroliac Joints"],
    "UPPER EXTREMITY": [
      "Shoulder",
      "Humerus",
      "Elbow",
      "Forearm",
      "Wrist",
      "Hand"
    ],
    "LOWER EXTREMITY": ["Femur", "Knee", "Leg", "Ankle", "Foot"],
    "CT ANGIOGRAPHY": [
      "Cerebral Angio",
      "Carotid Angio",
      "Chest Angio",
      "Abdomen Angio",
      "Renal Angio",
      "Upper Limb Angio",
      "Lower Limb Angio"
    ],
    "COMBINATION EXAMINATIONS": [
      "Neck & PNS",
      "Abdomen & Pelvis",
      "Chest & Abdomen Angio",
      "Brain & PNS",
      "Brain & Orbit",
      "Brain & Temporal Bone",
      "PNS & Orbit",
      "PNS & Temporal Bone",
      "Neck & Chest & Abdomen & Pelvis",
      "Chest & Abdomen"
    ],
    CONTRAST: ["Contrast"],
    OTHERS: ["Biopsy", "Scanogram"]
  },
  "X RAYS": {
    "HEAD & NECK": [
      "Skull",
      "Orbit",
      "Facial Bone",
      "Submentovertex (S.M.V.)",
      "Nasal Bone",
      "Paranasal Sinuses",
      "Post Nasal Space",
      "Mastoid",
      "Mandible",
      "T.M. Joint"
    ],
    SPINE: ["Neck Soft Tissue", "Cervical", "Thoracic", "Lumbar", "Coccyx"],
    CHEST: [],
    ABDOMEN: [],
    PELVIS: [],
    "UPPER EXTREMITY": [],
    "LOWER EXTREMITY": [],
    OTHERS: []
  },
  Fluoroscopy: {},
  Mammography: {}
};
// group = {
//   "HEAD & NECK": [],
//   BREAST: [],
//   ABDOMEN: [],
//   PELVIS: [],
//   "UPPER EXTREMITY": [],
//   "LOWER EXTREMITY": [],
//   "FINE NEEDLE ASPIRATION": [],
//   SPINE: [],
//   CHEST: [],
//   "COMBINATION EXAMINATIONS": [],
//   CONTRAST: [],
//   "CT ANGIOGRAPHY": [],
//   "SPINE MYELOGRAM": [],
//   "BARIUM EXAMINATIONS": [],
//   "EXTREMITIES VENOGRAM": [],
//   OTHERS: []
// };

export { rads };
