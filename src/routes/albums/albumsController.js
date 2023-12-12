const connexion = require('../../../db-config');
const db = connexion.promise();

const getAll = async (req, res) => {
  // Récupérer la liste des albums
  // Connexion à la base de données
  // Requête à la base de données
  // Stocker le résultat de la requête, on passe par une variable
  const [albums] = await db.query(`SELECT * FROM albums`);
  res.status(200).json(albums);
};

const getOne = (req, res) => {
  // Récupérer l'id spécifié dans la route
  // Récupérer les informations de l'album correspondant à l'id
  // Stock les informations dans une variable
  // Renvoie le résultat de la variable
  res.status(200).send('Get One route is OK');
};

const getTracksByAlbumId = async (req, res) => {
  // Récupérer l'id de l'album
  // Selectionner les chansons d'un album
  // Récupérer la liste des chansons
  // Renvoyer les informations des chansons de cet album
  const id = parseInt(req.params.id, 10);
  const [tracks] = await db.query(`SELECT * FROM track WHERE id_album = ?`, [
    id,
  ]);
  res.status(200).json(tracks);
};

const postAlbums = (req, res) => {
  // OPTIONNAL: Créer une variable pour récupérer les informations du body concernant l'album
  // en destructurant via des {}
  // TODO: La requête à la base de données 
  // TODO: Renvoyer la réponse JSON, et le bon status code
  res.status(200).send('Post route is OK');
};

const updateAlbums = (req, res) => {
  // Créer une variable pour récupérer l'id de l'album à mettre à jour
  // Destructurer les informations à mettre à jour
  // Faire la requête de mise à jour en base de données
  // Faire une recherche GOOGLE pour vérifier qu'une ligne en BDD a bien été modifiée
  // Renvoyer le bon status code
  res.status(200).send('Update route is OK');
};

const deleteAlbums = (req, res) => {
  res.status(200).send('Delete route is Ok');
};

module.exports = {
  getAll,
  getOne,
  getTracksByAlbumId,
  postAlbums,
  updateAlbums,
  deleteAlbums,
};
