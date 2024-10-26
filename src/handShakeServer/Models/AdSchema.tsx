interface IAd {
    ad_id: number,
    owner_id: number,
    title: string,
    description: string,
    city: string,
    district: string,
    age_requirements: number,
    nationality: string,
    budget: number,
    number_of_roommates: number,
    gender: string,
    bad_habits: string,
    cleanliness: string,
    character: string,
    lifestyle: string,
    archived: boolean,
}

export type { IAd };