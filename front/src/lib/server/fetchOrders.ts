import { IProduct } from "@/interfaces/Interfaces";


export const postOrders = async (token: string | null, products:number[]) => {
    try {
        const response = await fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({products})
        })
        if(response.ok) {
            console.log('success')
            return response
        } else {
            console.log('error')
        }
    } catch (error) {
        console.log(error)
    }
  }

export const getUsersOrders = async (token: string) => {
    const response = await fetch("http://localhost:5000/users/orders", {
        method: "GET",
        headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
        },
    });
    const data = await response.json();
    return data;
};
