

export type Product = {
    id: number;
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    category: string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[],
    gallery: {
        first: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        second: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        third: {
            mobile: string;
            tablet: string;
            desktop: string;
        }
    },
    others: {
        slug: string;
        name: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    }[],
   
}

export type FormCheckout = {
    name: string,
    email: string,
    phone: number,
    address: string,
    zip: number,
    city: string,
    country: string,
    payment: string
    eMoneyNumber: number,
    eMoneyPin: number
    
}

export type FormErrors = {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    eMoneyNumber: string;
    eMoneyPin: string;
};


export type CartProduct = Product & {quantity: number}

export type DeviceType = 'mobile' | 'tablet' | 'desktop';