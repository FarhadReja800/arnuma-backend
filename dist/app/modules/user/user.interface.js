"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIsActiveStatus = exports.TUserRoles = void 0;
var TUserRoles;
(function (TUserRoles) {
    TUserRoles["USER"] = "user";
    TUserRoles["ADMIN"] = "admin";
    TUserRoles["SUPER_ADMIN"] = "super-admin";
    TUserRoles["MODERATOR"] = "moderator";
    TUserRoles["MANAGER"] = "manager";
})(TUserRoles || (exports.TUserRoles = TUserRoles = {}));
var TIsActiveStatus;
(function (TIsActiveStatus) {
    TIsActiveStatus["ACTIVE"] = "isActive";
    TIsActiveStatus["INACTIVE"] = "isInactive";
    TIsActiveStatus["BLOCKED"] = "isBlocked";
    TIsActiveStatus["PENDING"] = "isPending";
    TIsActiveStatus["DELETED"] = "isDeleted";
})(TIsActiveStatus || (exports.TIsActiveStatus = TIsActiveStatus = {}));
//# sourceMappingURL=user.interface.js.map