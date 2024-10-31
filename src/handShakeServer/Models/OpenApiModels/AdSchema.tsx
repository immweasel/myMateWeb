// interface IAd {
//     ad_id: number,
//     owner_id: number,
//     title: string,
//     description: string,
//     city: string,
//     district: string,
//     age_requirements: number,
//     nationality: string,
//     budget: number,
//     number_of_roommates: number,
//     gender: string,
//     bad_habits: string,
//     cleanliness: string,
//     character: string,
//     lifestyle: string,
//     archived: boolean,
// } // This looks in the Plan

interface IAd {
    ad_id: number,
    title: string,
    description: string,
    location: string,
    price: number
} // This looks in OpenApi.yaml


export type { IAd };