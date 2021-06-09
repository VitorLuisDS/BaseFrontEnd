enum ActionsTypesNames {
    AddAsync = "AddAsync",
    InitializeAsync = "InitializeAsync"
};

export abstract class ActionsTypes {
    public static [ActionsTypesNames.AddAsync]: string = ActionsTypesNames.AddAsync;
    public static [ActionsTypesNames.InitializeAsync]: string = ActionsTypesNames.InitializeAsync;
};


