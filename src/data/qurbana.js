export const qurbana = [
    {
        id: "entrance-rite",
        title: { en: "Entrance Rite", ml: "പ്രവേശന ശുശ്രൂഷ" },
        type: "rubric",
        texts: { en: "The faithful gather in the church. The celebrant and ministers proceed in procession to the altar. The people stand.", ml: "വിശ്വാസികൾ ദേവാലയത്തിൽ ഒരുമിക്കുന്നു. കാർമ്മികനും ശുശ്രൂഷകരും ബലിപീഠത്തിലേക്ക് ഘോഷയാത്രയായി വരുന്നു. ജനം എഴുന്നേൽക്കുന്നു." },
        rubrics: { en: "All stand. The procession enters with incense.", ml: "എല്ലാവരും എഴുന്നേൽക്കുക. ധൂപത്തോടു കൂടി ഘോഷയാത്ര പ്രവേശിക്കുന്നു." },
        participants: ["all"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "proemion",
        title: { en: "Proemion (Opening Prayer)", ml: "പ്രോഇമിയോൻ (ആരംഭ പ്രാർഥന)" },
        type: "prayer",
        texts: { en: "Glory and honour to the Father and to the Son and to the Holy Spirit...\n\nDeacon: Let us pray for peace.", ml: "പിതാവിനും പുത്രനും പരിശുദ്ധ റൂഹായ്ക്കും മഹത്വവും ബഹുമാനവും...\n\nശെമ്മാശൻ: നമുക്ക് സമാധാനത്തിനു വേണ്ടി പ്രാർഥിക്കാം." },
        rubrics: { en: "The celebrant begins the doxology.", ml: "കാർമ്മികൻ ദോക്സോളജി ആരംഭിക്കുന്നു." },
        participants: ["celebrant", "deacon"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "trisagion",
        title: { en: "Trisagion", ml: "തൃശുദ്ധം" },
        type: "hymn",
        texts: { en: "Holy God, Holy Mighty, Holy Immortal, Have mercy on us. (Sung 3 times)", ml: "ദൈവം പരിശുദ്ധൻ, ശക്തൻ പരിശുദ്ധൻ, അമർത്യൻ പരിശുദ്ധൻ, ഞങ്ങളോട് കരുണ തോന്നേണമേ. (3 തവണ ആലപിക്കുക)" },
        rubrics: { en: "All stand for the hymn.", ml: "ഹൈമ്നിനായി എല്ലാവരും നിൽക്കുന്നു." },
        participants: ["congregation"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "old-testament",
        title: { en: "Old Testament Reading", ml: "പഴയനിയമ വായന" },
        type: "reading",
        texts: { en: "[The Old Testament reading is proclaimed here.]", ml: "[പഴയനിയമ ഭാഗം ഇവിടെ വായിക്കപ്പെടുന്നു.]" },
        rubrics: { en: "The reader at the ambo.", ml: "വായനക്കാരൻ അമ്പോയിൽ." },
        participants: ["reader"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "epistle",
        title: { en: "Epistle", ml: "ലേഖനം" },
        type: "reading",
        texts: { en: "[The appointed Epistle is proclaimed here.]", ml: "[നിശ്ചിത ലേഖനം ഇവിടെ വായിക്കപ്പെടുന്നു.]" },
        rubrics: { en: "All are seated.", ml: "എല്ലാവരും ഇരിക്കുന്നു." },
        participants: ["reader"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "gospel",
        title: { en: "Holy Gospel", ml: "പരിശുദ്ധ സുവിശേഷം" },
        type: "reading",
        texts: { en: "[The Holy Gospel is proclaimed here.]", ml: "[പരിശുദ്ധ സുവിശേഷം ഇവിടെ വായിക്കപ്പെടുന്നു.]" },
        rubrics: { en: "All stand. Procession with candles and incense.", ml: "എല്ലാവരും എഴുന്നേൽക്കുന്നു. മെഴുകുതിരിയോടും ധൂപത്തോടും കൂടി ഘോഷയാത്ര." },
        participants: ["priest", "deacon"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "homily",
        title: { en: "Homily", ml: "പ്രഭാഷണം" },
        type: "rubric",
        texts: { en: "[The Homily is preached.]", ml: "[പ്രഭാഷണം നടത്തപ്പെടുന്നു.]" },
        rubrics: { en: "The faithful are seated.", ml: "വിശ്വാസികൾ ഇരിക്കുന്നു." },
        participants: ["priest"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "creed",
        title: { en: "Nicene Creed", ml: "നിഖ്യാ വിശ്വാസ പ്രമാണം" },
        type: "prayer",
        texts: { en: "We believe in one God, the Father almighty...", ml: "ഞങ്ങൾ ഏകദൈവത്തിൽ വിശ്വസിക്കുന്നു, സർവ്വശക്തനായ പിതാവ്..." },
        rubrics: { en: "All stand and profess.", ml: "എല്ലാവരും എഴുന്നേൽക്കുന്നു." },
        participants: ["all"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "anaphora",
        title: { en: "Anaphora (Great Offering)", ml: "അനാഫൊറ (മഹാ നിവേദ്യം)" },
        type: "prayer",
        texts: { en: "The grace of our Lord Jesus Christ be with you all.", ml: "നമ്മുടെ കർത്താവ് ഈശോമിശിഹായുടെ കൃപ നിങ്ങൾ എല്ലാവരോടും കൂടി ഇരിക്കട്ടെ." },
        rubrics: { en: "Eucharistic celebration begins.", ml: "കുർബ്ബാനയുടെ കൂദാശക്രിയ ആരംഭിക്കുന്നു." },
        participants: ["priest", "congregation"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "institution",
        title: { en: "Institution Narrative", ml: "വാഴ്ത്തൽ പ്രാർഥന" },
        type: "prayer",
        texts: { en: "He took bread, gave thanks, broke it and gave it to his disciples...\n\n\"Take, eat; this is my Body.\"", ml: "അപ്പമെടുത്ത് ആശീർവ്വദിച്ചു ശിഷ്യന്മാർക്ക് നൽകിക്കൊണ്ട് അരുളിച്ചെയ്തു...\n\n\"ഇത് എന്റെ ശരീരമാകുന്നു.\"" },
        rubrics: { en: "Elevation of the Host.", ml: "തിരുശരീരം ഉയർത്തുന്നു." },
        participants: ["priest"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "lords-prayer",
        title: { en: "Lord's Prayer", ml: "കർത്തൃ പ്രാർഥന" },
        type: "prayer",
        texts: { en: "Our Father, who art in heaven...", ml: "സ്വർഗ്ഗസ്ഥനായ ഞങ്ങളുടെ പിതാവേ..." },
        rubrics: { en: "All pray together.", ml: "എല്ലാവരും ഒരുമിച്ച് പ്രാർഥിക്കുന്നു." },
        participants: ["all"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "communion",
        title: { en: "Holy Communion", ml: "പരിശുദ്ധ കുർബ്ബാന" },
        type: "prayer",
        texts: { en: "[The faithful receive Communion.]", ml: "[വിശ്വാസികൾ കുർബ്ബാന സ്വീകരിക്കുന്നു.]" },
        rubrics: { en: "Communion is distributed.", ml: "വിശ്വാസികൾക്ക് കുർബ്ബാന നൽകപ്പെടുന്നു." },
        participants: ["all"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "thanksgiving",
        title: { en: "Thanksgiving", ml: "നന്ദി പ്രകാശനം" },
        type: "prayer",
        texts: { en: "We give you thanks, O Lord our God...", ml: "ഞങ്ങളുടെ കർത്താവായ ദൈവമേ, അങ്ങേയ്ക്ക് ഞങ്ങൾ നന്ദി പറയുന്നു..." },
        rubrics: { en: "Concluding prayers.", ml: "സമാപന പ്രാർഥനകൾ." },
        participants: ["priest", "congregation"],
        visibleTo: ["priest", "reader", "congregation"]
    },
    {
        id: "benediction",
        title: { en: "Final Blessing", ml: "അന്ത്യ ആശീർവ്വാദം" },
        type: "prayer",
        texts: { en: "May the blessing of Almighty God be with you all.", ml: "സർവ്വശക്തനായ ദൈവത്തിന്റെ ആശീർവ്വാദം നിങ്ങൾ എല്ലാവരോടും കൂടി ഇരിക്കട്ടെ." },
        rubrics: { en: "The dismissal.", ml: "വിടവാങ്ങൽ." },
        participants: ["priest"],
        visibleTo: ["priest", "reader", "congregation"]
    }
];
export const sectionTypeLabels = { hymn: { en: "Hymn", ml: "ഗാനം" }, prayer: { en: "Prayer", ml: "പ്രാർഥന" }, reading: { en: "Reading", ml: "വായന" }, rubric: { en: "Rubric", ml: "നിർദ്ദേശം" } };
