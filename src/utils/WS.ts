export default class WS {
    private url: string;
    private username: string;
    private password: string;
    private token: string | null = null;

    constructor(){
        this.url = "/api/proxy";
        this.username = process.env.NEXT_PUBLIC_USERNAME_WS || "";
        this.password = process.env.NEXT_PUBLIC_PASSWORD_WS || "";

        if(!this.username || !this.password){
            throw new Error("WS credentials not found");
        }
    }

    public getToken(): string | null {
        return this.token
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
                }),
            });

            const response = await result.json();

            if (errorCodes.includes(response.errorCode)) {
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
            if (!this.token) {
                await this.generateToken();
            }

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

    public async ws2Run(act: string, params: object): Promise<object> {
        try {
            const result = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Connection": "keep-alive",
                },
                body: JSON.stringify({
                    act,
                    ...params,
                }),
            });

            if (!result.ok) {
                throw new Error(`Request failed: ${result.statusText}`);
            }

            return await result.json();
        } catch (error) {
            console.error("Error in ws2Run:", error);
            throw error;
        }
    }
}
