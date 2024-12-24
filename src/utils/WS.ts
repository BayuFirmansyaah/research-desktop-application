export default class WS {
    private url: string;
    private username: string;
    private password: string;
    public token: string | null = null;

    constructor(){
        this.url = "/api/proxy";
        this.username = process.env.NEXT_PUBLIC_USERNAME_WS || "";
        this.password = process.env.NEXT_PUBLIC_PASSWORD_WS || "";

        if(!this.username || !this.password){
            throw new Error("WS credentials not found");
        }
    }

    private async loadToken(): Promise<void> {
        try{
            const response = await fetch("/api/token",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if(response.ok){
                const data = await response.json();

                if(data.token){
                    this.token = data.token
                    
                    if(!this.wsIsConnected()){
                        await this.generateToken();
                    }
                }else{
                    await this.generateToken();
                }
            }else{
                await this.generateToken();
            }
        }catch(error){
            console.log("Error loading token:", error);
            await this.generateToken();
        }
    }

    public async generateToken(): Promise<void> {
        try {
            const result = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Connection": "keep-alive",
                },
                body: JSON.stringify({
                    act: "GetToken",
                    username: this.username,
                    password: this.password,
                }),
            });

            let response = await result.json();

            this.token = response.data.token

            await fetch("/api/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token: this.token,
                }),
            });

        } catch (error) {
            console.error("Error fetching token:", error);
            throw error;
        }
    }

    public async wsIsConnected(): Promise<boolean> {
        const errorCodes = [104, 12, 15]; 
        try {
            const result = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    act: "GetJenisEvaluasi",
                    token: this.token,
                }),
            });

            const response = await result.json();
          
            if (errorCodes.includes(response.error_code)) {
                return false;
            }

            return true;
        } catch (error) {
            console.error("Error checking connection:", error);
            return false;
        }
    }

    public async ws2RunLoop(act: string, data: object): Promise<any> {
        try {
            await this.loadToken();
           
            const params = {
                act,
                ...data,
                token: this.token,
            };

            const result = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Connection": "keep-alive",
                },
                body: JSON.stringify(params),
            });

            if (!result.ok) {
                throw new Error(`Request failed: ${result.statusText}`);
            }

            return await result.json();
        } catch (error) {
            console.error("Error in ws2RunLoop:", error);
            throw error;
        }
    }
}
