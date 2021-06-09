enum MutationsTypesNames {
    Add = "Add",
    Initialize = "Initialize"
};

export abstract class MutationsTypes {
    public static [MutationsTypesNames.Add]: string = MutationsTypesNames.Add;
    public static [MutationsTypesNames.Initialize]: string = MutationsTypesNames.Initialize;
};