export const ROLES = {
    user: "USER",
    admin: "ADMIN"
};

export const SCOPES = {
    canCreate: "can-create",
    canEdit: "can-edit",
    canView: "can-view",
    canDelete: "can-delete"
};


export const PERMISSIONS = {
    [ROLES.admin]: [SCOPES.canCreate, SCOPES.canEdit, SCOPES.canDelete, SCOPES.canView],
    [Roles.user]: [SCOPES.canView]
}