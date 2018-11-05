import { ttmConfig } from './ttm-config';

export class TtmState{

    url = `https://slack.com/api/oauth.access?
                client_id=`+ttmConfig.config.client_id+`&
                client_secret=`+ttmConfig.config.client_secret;
    
    
    //url = 'https://slack.com/api/oauth.access?client_id=juan&client_secret=pett';
        
    //this.url = url.replace('###clientId###', this._ttmConfig.client_id);
    //this.url = url.replace('###clientSecret###', this._ttmConfig.client_secret);
    
}