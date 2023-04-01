require("../../../lib/mongodb");
const Song = require("../../../models/Song");
export default async function handle(req, res) {
  try {
    const songs = await Song.find({});
    return res.status(200).json(songs);
  } catch (error) {
    return res.status(500).json(error);
  }
}
