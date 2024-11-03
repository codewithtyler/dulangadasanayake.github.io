export interface PersonalInfo {
    name: string;
    title: string;
    avatar: string;
    intro: string;
    email: string;
    phone: string;
    location: string;
}

export interface SocialLinks {
    [key: string]: string;
}

export interface Section {
    title: string;
    description: string;
}

export interface Config {
    personal: PersonalInfo;
    social: SocialLinks;
    sections: {
        about: Section;
        [key: string]: Section;
    };
} 