import { wait } from "./utils";
import VoiceAssistant from "./voiceAssistant";
import VoiceVisualizer from "./voiceVisualizer";

const startButton = document.getElementById("start-btn");

let isStarted = false;
let processingWord = null;

const voiceVisualizer = new VoiceVisualizer();
const voiceAssistant = new VoiceAssistant();

async function processWord(word) {
  switch (word) {
    case "climate-change":
      voiceAssistant.saySpeech(
        "Okay, first what is the meaning of climate change?, climate change refers to the change in the environmental conditions of the earth. This happens due to many internal and external factors. The climatic change has become a global concern over the last few decades. Besides, these climatic changes effect life on the earth in various ways. There are many gases that help to global warming, but only six gases are the main and these gases are (carbon dioxide,methan,nitrous oxide,hydrofluorocarbons,perfluorocarbons,sulphur hexafluoride) specificly these gases are helping to keep sunrays to make the Earth warm and its climate better, but when these gases increase in the atmosphere that cause the global warming. Also, there are many reasons for climate change phenomena, the first reason we talked about it before and it is the global warming gases. the second reason is cutting the forests for taking the wood to make our facilities. the third reason is transportation because it outputs many global warming gases like carbon dioxide. the forth reason is using the Fossil fuels and it is a main reason of climate change and global warming. Do you ask yourself how to decrease climate change effect? I will tell you how, we have to plant many trees and plants to absorb the harmful gases like carbon dioxide, also we haven't to use the fossil fuels, finally we have to use the clean energy like (sunrays,wind,water,electricity) to make our planet better, and keep it in your mind(there is no planet B)."
      );
      await wait(100000);

      break;

    case "Hello":
      voiceAssistant.saySpeech("Hi, how can I help you sir?");
      await wait(5500);
      break;

    case "harmful-emissions":
      voiceAssistant.saySpeech(
        "Okay first the meaning of harmful emissions or emissions, Harmful emissions are the main air pollutants present in most urban areas, carbon monoxide, nitrogen oxides, sulfur oxides, hydrocarbons, and particulate matter both solid and liquid. These pollutants circulate throughout the world's atmosphere in concentrations high enough to cause progressively serious health problems. Second the effects of these emissions on humans, People suffer a wide range of health effects from exposure to air pollution. Effects can be divided into short term effects and long term effects. Short-term effects which are temporary, include illnesses such as pneumonia or bronchitis. They also include discomforts such as irritation of the nose, throat, eyes, or skin. Air pollution can also cause headaches, dizziness, and nausea. Bad odors from factories, garbage, or sewage systems are also considered air pollution. These odors are less dangerous, but still annoying. The long-term effects of air pollution can last for years or an entire lifetime. It can even lead to the death of a person. Long-term health effects of air pollution include heart disease, lung cancer, and respiratory conditions such as emphysema. Air pollution can also cause long-term damage to nerves, brain, kidneys, liver, and other organs. Some scientists suspect that air pollutants cause birth defects. Approximately 2.5 million people die worldwide each year from the effects of outdoor or indoor air pollution. People react differently to different types of air pollution. Young children and the elderly, whose immune systems tend to be weak, are often more sensitive to pollution. Conditions such as asthma, heart disease, and lung disease can be exacerbated by exposure to air pollution. Length of exposure and the amount and type of contaminant are also factors. Third the effects of these emissions on the environment, Like humans, animals and plants, entire ecosystems can suffer from the effects of air pollution. Fog, like smog, is a visible type of air pollution that obscures shapes and colors. Hazy air pollution can silence voices. How to reduce those emissions?, The work begins with a shift from reliance on fossil fuels, to generate electricity to the use of clean energy that reduces carbon in the production of electricity. As clean energy increases, a massive shift in electrification can then increase access to clean energy, and replace polluting fuels, etc."
      );
      await wait(160000);
      break;

    case "cyper-attacks":
      voiceAssistant.saySpeech(
        "Nice, first what is the definition of cyperattacks?. A cyber attack, or what is also known as an electronic computer attack, is any attack that is considered an attempt to expose, alter, disable, destroy, steal, or obtain unauthorized access to, or unauthorized use of, assets. A cyber attack or “cyber attack” is any kind From an offensive maneuver targeting computer information systems, infrastructure, computer networks, or personal computers, an attacker is a person or process that attempts to access data, functions, or other restricted areas of a system without permission, potentially with malicious intent, depending on In context, cyberattacks can be part of cyberwarfare or cyberterrorism.A cyberattack can be used by sovereign states, individuals, groups, society, organizations or even gangs, and these cyberattacks may originate from an unknown source. second Is there types of cyperattacks?, the answer is yes, there are many types of it. and the following are the most famous. malware, Phishing, middleman attack, Denial-of-service attacks, Attacks without waiting or zero day, (DNS) Tunneling across domain names. third, the Reasons for a cyber attack. The occurrence of cyber attacks is attributed to many reasons, including electronic warfare and cyber terrorism, as do hackers, meaning that the motives behind these attacks may differ according to their perpetrators, and the motives of a cyber attack fall into 3 categories: criminal, personal and political, In the case of criminal motives, attackers seek financial gain by hacking data and stealing money, common examples of personal motive are some unhappy employees stealing data or money or disrupting the company system, to take their rights, while attackers with social and political motives seek to Draw attention to their issues. fourth, what is the damage from cyperattacks?. Among the other damages that may result from these attacks are the following, Damage to trademarks and reputation, Disrupting the work of individuals, companies and others, Institutions and individuals lose a lot of money, by imposing additional expenses to repair and prevent damage, Intellectual property theft, The sudden decline in the revenues of institutions and companies. Now I will tell you the most famous cyperattacks in history. number one, Robert Morris in 1988. Michael Calcey in 2000. The Chinese website Google was subjected to a cyber attack in 2009. that's all the summary about it."
      );
      await wait(165000);
      break;

    case "digital-marketing":
      voiceAssistant.saySpeech(
        "First, What is meant by digital marketing?. Digital marketing refers to creating and disseminating content through digital media channels—websites, welcome pages, social media, email, and mobile apps—and promoting that content using a variety of strategies across paid, earned, and owned digital SEM and SEO channels, including Pay Per Click (PPC) Advertising, Content Sharing, Social Media, Email, Text, And Much More. second, The importance of digital marketing. Digital marketing strategies help marketers set goals, target audiences, and develop a digital marketing plan that best reaches that audience. These strategies provide the necessary direction for the specific marketing campaign or program and a framework for evaluating the results. Today, everything is digital, and digital marketing has been integrated into almost every aspect of business, changing how businesses connect with customers and fundamentally deliver value to them. So if your company can't implement and implement a digital marketing strategy in a global, increasingly sophisticated online marketplace, it simply won't be able to compete. third, there are Some digital marketing strategies. number one, Social network marketing. number two, Video marketing. number three, Marketing on social media. number four, Text messaging (SMS and MMS services). number five, Mobile ads. number six, Marketing and web design. number seven, Electronic stores. these are some of digital marketing strategies. finally what is the advantages of digital marketing?. there are many advantages like Increase access rate. Precise targeting. the speed. measurability. that's all about it."
      );
      await wait(110000);
      break;
  }
  processingWord = null;
}

function onListen(word) {
  if (processingWord) return;

  console.log("Word: ", word);
  processingWord = word;
  processWord(word);
}

startButton.onclick = async () => {
  if (!isStarted) {
    //Start assistant
    startButton.innerText = "Starting...";
    voiceAssistant.saySpeech(
      "I'm your voice assistant, please tell me how can I help you?"
    );
    await wait(2500);
    await voiceAssistant.startAssistant(onListen);
    await voiceVisualizer.startVisualization();

    isStarted = true;
    startButton.innerText = "Stop";
  } else {
    //Stop assistant
    startButton.innerText = "Stopping...";
    await voiceAssistant.stopAssistant();
    voiceVisualizer.stopVisualization();
    isStarted = false;
    startButton.innerText = "Start";
  }
};
