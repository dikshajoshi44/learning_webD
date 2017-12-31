var facebookProfile = {
    
    name:"diksha joshi",
    friends:3,
    messages:["abc","xyz","pqs"],
    
    postMessage:function (message) {
        facebookProfile.messages.push(message);
    },
    
    deleteMessage:function (index) {
        facebookProfile.messages.splice(index, 1);
    },
    
    addFriend:function (){
        facebookProfile.friends++;
    },
    
    removeFriend:function (){
        facebookProfile.friends--;
    }
};