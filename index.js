module.exports = function joke(){
const jokes = [{"id":348,"type":"general","setup":"Why did the scarecrow win an award?","punchline":"Because he was outstanding in his field."},{"id":241,"type":"general","setup":"What do you get when you cross a bee and a sheep?","punchline":"A bah-humbug."},{"id":329,"type":"general","setup":"Why did the barber win the race?","punchline":"He took a short cut."},{"id":134,"type":"general","setup":"How does a dyslexic poet write?","punchline":"Inverse."},{"id":90,"type":"general","setup":"Did you hear about the guy who invented Lifesavers?","punchline":"They say he made a mint."},{"id":260,"type":"general","setup":"What is the leading cause of dry skin?","punchline":"Towels"},{"id":24,"type":"programming","setup":"A SQL query walks into a bar, walks up to two tables and asks...","punchline":"'Can I join you?'"},{"id":264,"type":"general","setup":"What kind of award did the dentist receive?","punchline":"A little plaque."},{"id":86,"type":"general","setup":"Did you hear about the bread factory burning down?","punchline":"They say the business is toast."},{"id":29,"type":"programming","setup":"There are 10 types of people in this world...","punchline":"Those who understand binary and those who don't"}];
return jokes[Math.floor(Math.random() * 10)];
}
