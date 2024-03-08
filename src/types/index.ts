export type AuthPayload = {
    access_token: string;
    authenticated: boolean;
    refresh_token: string;
    user_data: UserInfo;
};

type UserInfo = {
    user_id: number;
    email: string;
    username: string;
    usersubscription: UserSubscription;
};


type UserSubscription = {
    id: number;
    ability_to_remix: boolean;
    max_download_limit: number;
    max_generate_limit: number;
    payment_plan: number;
    plan_type: string;
    remaining_days: number;
    subscription_id: null | number;
};

export type UserData = {
    image_id: number;
    image_path: string;
    caption: string[];
    username: string;
    likes: number[];
    comments: string[];
};

export type ImageData = {
    id: string;
    image_path: string;
    username: string;
    likes: string[];
    comments: string[];
};

export type CategoryType = {
    categories_id: string;
    categories_name: string;
};
