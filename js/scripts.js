/*
Boolzapp - a (not very) innovative messaging platform

Nome Repo: vue-boolzapp
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto
 attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra,
come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta,
che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene
le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

Consigli utili:
Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
Per gestire le date, può essere utile la libreria Luxon
La struttura dell’array dei contatti potrebbe avere questa forma:
*/

//inizializzo una costante globale luxon
const time = luxon.DateTime

// Estraggo la funzione createApp dall'oggetto Vue
const {createApp} = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({

  data(){
    return{
      contacts: [

            {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },

            {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },

            {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },

            {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },

            {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
                ],
            },

            {
            name: 'Claudia',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
                ],
            },

            {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
                ],
            },

            {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
                ],
            }

        ],

        index: 0,
        inputMessage: '',
        contactSearch: '',
        isMessageInputEmpty: true,

    }

  },

  methods: {
 
    //funzione per stampare un nuovo messaggio
    newMessage() {

        //verifico se il messaggio non è vuoto prima di procedere
        if (this.inputMessage.trim() !== '') {

            //il messaggio avrà il contenuto dell'input, status sent e l'orario formattato
            const newMessage = {
                message: this.inputMessage,
                status: 'sent',
                date: time.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
            };
              
            //pulisco il campo di input dopo l'invio
            this.inputMessage = '';
              
            //aggiungo il nuovo messaggio all'array dei messaggi
            this.contacts[this.index].messages.push(newMessage);
              
            //chiamo a responseMessage() per gestire eventuali risposte automatiche
            this.responseMessage();

            //imposto lo stato dell'input a true quando è vuoto
            this.isMessageInputEmpty = true;
            }
        },
        
        //funzione per stampare un messaggio di risposta
        responseMessage(){

            //il messaggio dopo 1 secodno verra inviato con status received e con l'orario formattato
            setTimeout(() => {
            const message = {
                message: 'Ok',
                status: 'received',
                date: time.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
                }

            //viene pushato nell'array    
            this.contacts[this.index].messages.push(message);
            }, 1000);
    
        },

        //funzione per cercare tra i contatti
        search(){

            //cerca i contatti in base al criterio di ricerca (deve includere le lettere nel nome)
            this.contacts.forEach(contact => {
            contact.visible = contact.name.toLowerCase().includes(this.contactSearch.toLowerCase())
            })

        },

        //funzione per cancellare il messaggio selezionato
        deleteMessage(i){
            this.contacts[this.index].messages.splice(i,1);
        },

        //funzione per formattare la data
        formatTime(dateTime) {
            const formattedDate = time.fromFormat(dateTime, 'dd/MM/yyyy HH:mm:ss', {
                 locale: 'it' 
                });

            return formattedDate.toFormat('HH:mm');
        },

        //funzione per verificare che l'input sia vuoto
        checkInput() {
            this.isMessageInputEmpty = this.inputMessage.trim() === '';
        },

    },
   
// Monto l'istanza di Vue in pagina
}).mount("#app")