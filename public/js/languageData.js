const translations = {
    en: {
      // entry page 
      welcome: "Welcome to our Experiment",
      thankYou: "Thank you for your interest. Please read the following information before proceeding.",
      studyAim: "This experiment aims to investigate the effectiveness of Large Language Models on the productivity of knowledge workers.",
      Instructions: "Instructions",
      instructions: "You will be required to complete one task. Please follow the instructions carefully and use only the resources provided within the interface. Make sure you stay on this tab for the full experiment to verify that you have adhered to the guidelines.",
      Consent: "Consent",
      consent: "By proceeding, you consent to participate in this study. Your data will be used for research purposes only and will be kept confidential. For the purpose of ensuring that each participant attends this experiment only once, a cookie related to this experiment will be stored for 90 days.",
      agree: "I agree to participate in this study.",
      startButton: "Start Experiment",
      changeLanguage: "Sprache ändern:",
      
      // generative
      header_gen: "Research Paper Topic Generation Task",
      description: "You are a student at the University of Paderborn and you need to come up with topics for research papers.",
      task: "Think of three research topics in Business Law that could be explored. If you are not familiar with Business Law, you may select topics from Business Studies instead. However, topics specifically related to Business Law are preferred.",
      evaluationCriteria: "Your results will be evaluated based on originality, speed, and relevance.",
      timeLimit: "You have 5 minutes to solve this task.",
      inputPrompt: "Please enter these three topics in the boxes below.",
      topicLabel: "Topic",
      submitButton: "Submit",
      time: "Time remaining:",

      //retrieval 
      header: "Financial Calculations",
      description1: "As a controller at a big company, you are tasked with making several financial calculations based on the given financial data.",
      description2: "Use the tools provided on the right side for this task. Tabbing out is only allowed when you use the tool on the right side. Copying and pasting information into the textbox is allowed. You have 5 minutes to complete this task.",
      financialDataDate: "Financial Data as of 31.12.2023:",
      assets: "Assets",
      inMillion: "(in million €)",
      liabilities: "Liabilities",
      tangibleAssets: "Tangible Assets",
      subscribedCapital: "Subscribed Capital",
      financialAssets: "Financial Assets",
      capitalReserves: "Capital Reserves",
      retainedEarnings: "Retained Earnings",
      currentAssets: "Current Assets",
      netProfit: "Net Profit",
      provisions: "Provisions",
      total: "Total",
      shareInfo: "Number of old shares = 80 million<br> Number of new shares = 20 million<br> Price of old share = 60 €<br> Price of new share = 50 €",
      taskSubscriptionRight: "Since the company aims to increase their capital, shareholders will be influenced by this change. Your task is to calculate the 'subscription right' (Bezugsrecht).",
      placeholderNotepad: "Use this field to keep track of found information.",
      labelSubscriptionRight: "Subscription right:",
      placeholderSubscriptionRight: "Enter the final subscription right value here",
      submitButton: "Submit",
      timer: "Time remaining:",
      searchPlaceholder: "This is a search engine for you to use...",
      submitSearch: "SUBMIT",
      queriesLeft: "Queries left for this task: 10",
      calculator: "Calculator",
      calculatorPlaceholder: "Enter expression (e.g., 2+2*3/4-5)",
      calculateButton: "Calculate",
      labelResult: "Result:",
      placeholderResult: "Result will appear here",

      //js file translation
      queriesLeft: "Queries left for this task: 10",
      queriesLeft2: "Queries left for this task: ",
      llmPlaceholder: "This is an AI-powered bot for you to use...",

      //survey
      surveyHeader: "Survey",
        thankYouMessage: "Thank you for submitting your answer. Please fill out this short survey.",
        personalQuestionsHeader: "Demographic questions",
        ageLabel: "Age:",
        genderLabel: "Gender:",
        genderOptions: {
            choose: "Please choose",
            male: "Male",
            female: "Female",
            other: "Other",
            preferNotToSay: "Prefer not to say"
        },
        occupationLabel: "Occupation:",
        locationLabel: "Location (City/Country):",
        educationLabel: "Education:",
        educationOptions: {
            choose: "Please choose",
            noEducation: "No formal education",
            primaryEducation: "Primary education",
            secondaryEducation: "Secondary education",
            vocationalTraining: "Vocational training",
            bachelorDegree: "Bachelor's degree",
            masterDegree: "Master's degree",
            doctorateDegree: "Doctorate degree",
            professor: "Professor"
        },
        scaleDescription: "The scale ranges from 1 to 5, where 1 means strongly disagree and 5 means strongly agree.",
        experienceHeader: "Experience with the Task",
        timeManagementLabel: "I found the time allotted for the task sufficient.",
        taskUnderstandingLabel: "I found the instructions for the task very clear.",
        difficultyLevelLabel: "I found the task to be very difficult.",
        toolsUsageLabel: "I found the tools provided to be effective for completing the task.",
        aiProductivityLabel: "I believe that generative AI tools like ChatGPT enhance my productivity.",
        attentionCheckLabel: "Attention check, please select the 'strongly disagree' button with the value 1.",
        aiReuseLabel: "I frequently use generative AI tools like ChatGPT in my daily life.",
        aiSentimentLabel: "Express your opinion in less than 50 words and preferably in bullet points on the statement 'Generative AI tools like ChatGPT increase my productivity'.",
        aiSentimentPlaceholder: "Use this field to enter your opinion.",
        submitButton: "SUBMIT SURVEY",
    },

      //thank you page
        thankYouHeader: "Thank You",
        thankYouMessage: "Your responses have been recorded. Thanks for participating in our Experiment.",
        closePageMessage: "You can now close this page.",

    de: {
      // entry page 
      welcome: "Willkommen zu unserem Experiment",
      thankYou: "Vielen Dank für Ihr Interesse. Bitte lesen Sie die folgenden Informationen, bevor Sie fortfahren.",
      studyAim: "Dieses Experiment zielt darauf ab, die Wirksamkeit von Large Language Models auf die Produktivität von Wissensarbeitern zu untersuchen.",
      Instructions: "Anweisungen",
      instructions: "Sie müssen eine Aufgabe abschließen. Bitte folgen Sie den Anweisungen sorgfältig und verwenden Sie nur die Ressourcen, die innerhalb der Schnittstelle bereitgestellt werden. Stellen Sie sicher, dass Sie für das gesamte Experiment auf dieser Registerkarte bleiben, um zu überprüfen, dass Sie die Richtlinien eingehalten haben.",
      Consent: "Einverständnis",
      consent: "Durch Fortfahren stimmen Sie zu, an dieser Studie teilzunehmen. Ihre Daten werden nur zu Forschungszwecken verwendet und vertraulich behandelt. Um sicherzustellen, dass jeder Teilnehmer dieses Experiment nur einmal besucht, wird ein Cookie im Zusammenhang mit diesem Experiment für 90 Tage gespeichert.",
      agree: "Ich stimme der Teilnahme an dieser Studie zu.",
      startButton: "Experiment starten",
      changeLanguage: "Change Language:",

      // generative
      header_gen: "Aufgabe zur Generierung von Forschungsthemen",
      description: "Sie sind Student an der Universität Paderborn und müssen Themen für Forschungsarbeiten entwickeln.",
      task: "Denken Sie an drei Forschungsthemen im Bereich Wirtschaftsrecht, die untersucht werden könnten. Wenn Sie mit Wirtschaftsrecht nicht vertraut sind, können Sie auch Themen aus den Wirtschaftswissenschaften wählen. Bevorzugt werden jedoch Themen, die speziell mit dem Wirtschaftsrecht zusammenhängen.",
      evaluationCriteria: "Ihre Ergebnisse werden anhand von Originalität, Geschwindigkeit und Relevanz bewertet.",
      timeLimit: "Sie haben 5 Minuten Zeit, um diese Aufgabe zu lösen.",
      inputPrompt: "Bitte geben Sie diese drei Themen in die untenstehenden Felder ein.",
      topicLabel: "Thema",
      submitButton: "Einreichen",
      time: "Verbleibende Zeit:",

      //retrieval 
      header: "Finanzielle Berechnung",
      description1: "Als Controller in einem großen Unternehmen sind Sie damit beauftragt, mehrere Finanzberechnungen auf Basis der vorliegenden Finanzdaten durchzuführen.",
      description2: "Nutzen Sie die Hilfsmittel auf der rechten Seite für diese Aufgabe. Das Wechseln der Tabs ist nur erlaubt, wenn Sie das Hilfsmittel auf der rechten Seite verwenden. Das Kopieren und Einfügen von Informationen in das Textfeld ist erlaubt. Sie haben 5 Minuten Zeit, um diese Aufgabe zu lösen.",
      financialDataDate: "Finanzdaten zum Stand vom 31.12.2023:",
      assets: "Aktiva",
      inMillion: "(in Millionen €)",
      liabilities: "Verbindlichkeiten",
      tangibleAssets: "Sachanlagen",
      subscribedCapital: "Gezeichnetes Kapital",
      financialAssets: "Finanzanlagen",
      capitalReserves: "Kapitalrücklage",
      retainedEarnings: "Gewinnrücklage",
      currentAssets: "Umlaufvermögen",
      netProfit: "Jahresüberschuss",
      provisions: "Rückstellungen",
      total: "Gesamt",
      shareInfo: "Anzahl alter Aktien = 80 Millionen<br> Anzahl neuer Aktien = 20 Millionen<br> Preis alter Aktie = 60 €<br> Preis junger Aktie = 50 €",
      taskSubscriptionRight: "Da das Unternehmen sein Kapital erhöhen möchte, werden die Aktionäre durch diese Änderung beeinflusst. Ihre Aufgabe ist es, das 'Bezugsrecht' zu berechnen.",
      placeholderNotepad: "Verwenden Sie dieses Feld, um gefundene Informationen zu notieren.",
      labelSubscriptionRight: "Bezugsrecht:",
      placeholderSubscriptionRight: "Geben Sie hier den endgültigen Wert des Bezugsrechts ein",
      submitButton: "Einreichen",
      timer: "Verbleibende Zeit:",
      searchPlaceholder: "Dies ist eine Suchmaschine",
      submitSearch: "ABSENDEN",
      queriesLeft: "Verbleibende Abfragen für diese Aufgabe: 10",
      calculator: "Rechner",
      calculatorPlaceholder: "Ausdruck eingeben (z.B. 2+2*3/4-5)",
      calculateButton: "Berechnen",
      labelResult: "Ergebnis:",
      placeholderResult: "Ergebnis wird hier angezeigt",

      //js file translation
      queriesLeft: "Verbleibende Anfragen für diese Aufgabe: 10",
      queriesLeft2: "Verbleibende Anfragen für diese Aufgabe: ",
      llmPlaceholder: "Dies ist ein KI-gestützter Bot, den Sie verwenden können...",

      //survey
      surveyHeader: "Umfrage",
        thankYouMessage: "Vielen Dank für Ihre Antwort. Bitte füllen Sie diese kurze Umfrage aus.",
        personalQuestionsHeader: "Demographische Fragen",
        ageLabel: "Alter:",
        genderLabel: "Geschlecht:",
        genderOptions: {
            choose: "Bitte wählen",
            male: "Männlich",
            female: "Weiblich",
            other: "Andere",
            preferNotToSay: "Keine Angabe"
        },
        occupationLabel: "Beruf:",
        locationLabel: "Ort (Stadt/Land):",
        educationLabel: "Bildungsgrad:",
        educationOptions: {
            choose: "Bitte wählen",
            noEducation: "Keine formale Bildung",
            primaryEducation: "Grundschule",
            secondaryEducation: "Sekundarbildung",
            vocationalTraining: "Berufsausbildung",
            bachelorDegree: "Bachelor-Abschluss",
            masterDegree: "Master-Abschluss",
            doctorateDegree: "Doktorgrad",
            professor: "Professor"
        },
        scaleDescription: "Die Skala reicht von 1 bis 5, wobei 1 'stimme überhaupt nicht zu' und 5 'stimme voll und ganz zu' bedeutet.",
        experienceHeader: "Erfahrungen mit der Aufgabe",
        timeManagementLabel: "Ich fand die für die Aufgabe zur Verfügung gestellte Zeit ausreichend.",
        taskUnderstandingLabel: "Ich fand die Anweisungen für die Aufgabe sehr klar.",
        difficultyLevelLabel: "Ich fand die Aufgabe sehr einfach.",
        toolsUsageLabel: "Ich fand die bereitgestellten Werkzeuge effektiv für die Erledigung der Aufgabe.",
        aiProductivityLabel: "Ich glaube, dass generative KI-Tools wie ChatGPT meine Produktivität steigern.",
        attentionCheckLabel: "Aufmerksamkeitsprüfung, bitte wählen Sie den Knopf 'stimme überhaupt nicht zu' mit dem Wert 1.",
        aiReuseLabel: "Ich nutze häufig generative KI-Tools wie ChatGPT in meinem Alltag.",
        aiSentimentLabel: "Äußern Sie Ihre Meinung in maximal 50 Wörtern und in Stichpunkten zu der Aussage 'KI-Tools wie ChatGPT steigern meine Produktivität'.",
        aiSentimentPlaceholder: "Nutzen Sie dieses Feld, um Ihre Meinung einzugeben.",
        submitButton: "UMFRAGE EINREICHEN", 

      //thank you page
        thankYouHeader: "Vielen Dank",
        thankYouMessage: "Ihre Antworten wurden aufgezeichnet. Vielen Dank für Ihre Teilnahme an unserem Experiment.",
        closePageMessage: "Sie können diese Seite jetzt schließen."

    }
  };
  