Docker Commands - AI Prompt Library
Construire l’image Docker
docker build -t IA-PROMPT-LIBRARY

---

Lancer le conteneur
docker run -p 3000:3000 ai-prompt-library

---

Lancer en arrière-plan (mode détaché)
docker run -d -p 3000:3000 ai-prompt-library

---

Voir les conteneurs actifs
docker ps

---

Arrêter un conteneur
docker stop <container_id>

---

Supprimer un conteneur
docker rm <container_id>

---

Supprimer une image Docker
docker rmi ai-prompt-library

---

Accéder à l’application
http://localhost:3000/