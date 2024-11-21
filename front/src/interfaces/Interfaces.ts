interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

interface ICategory {
    id: number;
    name: string;
    products?: IProduct[];
}

interface ILogin {
   email: string,
   password: string

}

interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
    // credential?: ICredential; 
    // role: Role;
    orders?: IOrderResponse[];
}

interface ICreateOrder {
    userId: number;
    products: number[];
}

interface IOrderResponse {
    id: number;
    status: string;
    date: string;
    user: IUser;
    products: IProduct[];

}

interface ILoginUser {
    email: string;
    password: string;
}

interface IRegisterUser {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}


interface IProductCardProps{
    product: IProduct;
    remove?: () => void;
}

interface IProductsGridProps {
    products: IProduct[];
}

interface ICartContextType {
    cartItems: IProduct[];
    addToCart: (product: number) => void;
    removeFromCart: (productId: number) => void;
    total: number;
    proceedToCheckout: () => void; 
}

interface IUserResponse {
    login: boolean;
    user: Partial<IUser> | null;
    token: string;
}

export interface IButtonProps {
    content: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
    redirectTo?: string;
}

export interface IUserContextType {
    user: Partial<IUserResponse> | null
    setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null>>
    isLogged: boolean
    setIsLogged: (isLogged: boolean) => void
    signIn: (userCredential : ILogin) => Promise<boolean>
    signUp: (user: Omit<IUser, "id">) => Promise<boolean>
    logOut: () => void
}

export interface IRegisterSubmitData {
    address: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    name: string;
    userId?: number;
    orders?: IOrder[];
  }
  
  export interface UserSession {
    login: boolean;
    user: IRegisterSubmitData;
    token: string;
    name: string;
  }

  export interface ILoginForm {
    email: string;
    password: string;
  }

  export interface IOrder {
    id: number;
    status: string;
    date: string;
  }
  export interface IRegisterFormData {
    address: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    name: string;
  }
export type {
    ILoginUser,
    IUser,
    IRegisterUser,
    IProduct,
    ICategory,
    IProductCardProps,
    IProductsGridProps,
    ICartContextType,
    IUserResponse,
    IOrderResponse
}