// 5) 
type discordUser = {
    name: string;
    isAdmin: boolean;
    isGMI: boolean;
    roles: Array<string>;
}

type discordMessage = {
    user: discordUser;
    text: string;
    keks: number;
}

const user1: discordUser = {
    name: "diply",
    isAdmin: false,
    isGMI: true,
    roles: ["GMI", "code class"]
}

const user2: discordUser = {
    name: "niel",
    isAdmin: true,
    isGMI: true,
    roles: ["GMI", "code class", "crane manager"]
}

const message1: discordMessage = {
    user: user2,
    text: "gm dcc",
    keks: 0
}

const message2: discordMessage = {
    user: user1,
    text: "wtf is an onomonopia?",
    keks: 2
}

// 6) 
function addKekToMessage (message: discordMessage) {
    message.keks += 2;
}
console.log(message1.keks)
addKekToMessage(message1);
console.log(message1.keks)

function canDeleteServer (user: discordUser) {
    if (user.isAdmin) {
        return true
    } else {
        return false
    }
}
console.log(canDeleteServer(user1), canDeleteServer(user2))

function editMessage (message: discordMessage, user: discordUser, newText: string) {
    if (message.user === user) {
        message.text = newText
    } else {
        console.log("Cannot edit as you did not create the message")
    }
}
editMessage(message1,user1,"gn")
console.log(message1.text)
editMessage(message1,user2,"gn")
console.log(message1.text)