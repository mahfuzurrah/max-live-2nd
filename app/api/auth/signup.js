import { signUpWithCredentials } from "@/lib/actions/auth.actions";

export default async function signup(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { email, password, name } = req.body;
  try {
    const user = await signUpWithCredentials({ email, password, name });
    if (user) {
      res.status(200).json({ message: 'Utilisateur créé avec succès', user });
    } else {
      res.status(400).json({ message: 'Impossible de créer l’utilisateur' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
}