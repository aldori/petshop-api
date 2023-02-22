import OwnerRepository from "../repositories/owner.repository.js";

async function createOwner(owner) {
    return await OwnerRepository.insertOwner(owner);
}

async function getOwners() {
    return await OwnerRepository.getOwners();
}

async function getOwner(id) {
    return await OwnerRepository.getOwner(id);
}

async function deleteOwner(id) {
    return await OwnerRepository.deleteOwner(id);
}

async function updateOwner(owner) {
    return await OwnerRepository.updateOwner(owner);
}

export default {
    createOwner,
    getOwners,
    getOwner,
    deleteOwner,
    updateOwner
}