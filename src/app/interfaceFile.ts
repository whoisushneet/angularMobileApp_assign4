export interface Company {
    companyName : string,
	"companyEmail": string,
	"companyPhone" : string,
	"companyPhoto" : string
}

export interface Categories {
    "catid" : number, 
    "category": string, 
    "catimg": string
}

export interface Products {
    "ProductID":number,
    "Category": number,
    "Name":string,
    "Price":number,
    "Brand":string,
    "Color":string,
    "RatingAvg":number,
    "InventoryCount":number
}