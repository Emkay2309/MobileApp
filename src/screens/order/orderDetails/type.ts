// Define the structure for the order details
export interface OrderDetailType {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    total: number;
    prod_name: string;
    prod_cat_name: string;
    prod_image: string;
}

// Define the structure for the order itself
export interface OrderType {
    id: number;
    cost: number;
    created: string;
    order_details: OrderDetailType[];
}
