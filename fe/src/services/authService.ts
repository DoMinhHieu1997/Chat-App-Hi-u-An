const mainUrl = "http://localhost:5000/api"

export const registerService = async (name:string, email:string, password:string) => {
    try {
        const response = await fetch(mainUrl+"/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });
  
        if (!response.ok) throw new Error("Đăng ký thất bại!");
    
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};