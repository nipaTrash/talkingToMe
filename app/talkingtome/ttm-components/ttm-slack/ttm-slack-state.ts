
export class TtmSlackState{
        
    accessToken: string;
    
    oauthUrl = 'https://slack.com/api/oauth.access';
    
    slackUrlRoot = 'https://slack.com/api/';
    
    slackUrls = {
        channels: this.slackUrlRoot + 'channels.list?token=###accessToken###',
        members: this.slackUrlRoot + 'users.list?token=###accessToken###',
        history: this.slackUrlRoot + 'conversations.history?token=###accessToken###&channel=###channel###',
        openConversation: this.slackUrlRoot + 'conversations.open?token=###accessToken###&users=###users###',
        postMessage: this.slackUrlRoot+'chat.postMessage?token=###accessToken###&channel=###channel###&text=###text###',
    }
    
    isUserLogged(){
        return this.accessToken != null;
    }
    
    getChannelsUrl(){
        return this.slackUrls.channels.replace('###accessToken###',this.accessToken);
    }
    
    getMembersUrl(){
        return this.slackUrls.members.replace('###accessToken###', this.accessToken);
    }
    
    getHistoryUrl(channel){
        return this.slackUrls.history
            .replace('###accessToken###', this.accessToken)
            .replace('###channel###',channel.id);
    }
    
    getMemberConversation(member){
        return this.slackUrls.openConversation
            .replace('###accessToken###', this.accessToken)
            .replace('###users###',member.id); 
    }
    
    getPostMessageUrl(message, channel){
        return this.slackUrls.postMessage
            .replace('###accessToken###', this.accessToken)
            .replace('###channel###', channel)
            .replace('###text###', message);
        
    }
}