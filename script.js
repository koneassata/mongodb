// 1. Connexion à la base de données (MongoDB shell)


// 2. Création de la collection "contactlist" et insertion des documents
db.contactlist.insertMany([
    { nom: "Ben", prenom: "Moris", email: "ben@gmail.com", age: 26 },
    { nom: "Kefi", prenom: "Seif", email: "kefi@gmail.com", age: 15 },
    { nom: "Emilie", prenom: "brouge", email: "emilie.b@gmail.com", age: 40 },
    { nom: "Alex", prenom: "brown", age: 4 },
    { nom: "Denzel", prenom: "Washington", age: 3 }
]);

// 3. Afficher toute la liste des contacts
print("Liste complète des contacts :");
db.contactlist.find().pretty();

// 4. Afficher une seule personne en utilisant son ID (remplacez ObjectId("votre_id") par un ID réel)
var contact = db.contactlist.findOne();
print("Informations du contact avec ID " + contact._id + " :");
printjson(db.contactlist.findOne({ _id: contact._id }));

// 5. Afficher tous les contacts ayant un âge > 18
print("Contacts ayant plus de 18 ans :");
db.contactlist.find({ age: { $gt: 18 } }).pretty();

// 6. Afficher tous les contacts ayant un âge > 18 et dont le nom contient "ah"
print("Contacts ayant plus de 18 ans et contenant 'ah' dans le nom :");
db.contactlist.find({ age: { $gt: 18 }, nom: /ah/i }).pretty();

// 7. Modifier le prénom du contact "Kefi Seif" en "Kefi Anis"
db.contactlist.updateOne(
    { nom: "Kefi", prenom: "Seif" },
    { $set: { prenom: "Anis" } }
);
print("Modification effectuée : Kefi Seif devient Kefi Anis");

// 8. Supprimer les contacts ayant moins de 5 ans
db.contactlist.deleteMany({ age: { $lt: 5 } });
print("Contacts de moins de 5 ans supprimés");

// 9. Afficher la liste mise à jour des contacts
print("Liste mise à jour des contacts :");
db.contactlist.find().pretty();
