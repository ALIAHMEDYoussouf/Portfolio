const headerComponent = {
    template: `
    <div class="header-container">
      <img src="https://avatars.githubusercontent.com/u/90381095?s=460&u=1c3b3565a90b80442fbb2d0b01f45e816a59ddea&v=4" alt="Man Smiling" class="header-container__profile-picture">
      
      <div class="header-container__profile-description">
        <div class="header-container__profile-description__top">
          <div class="left-side">

            <h1 class="name">Youssouf ALI AHMED</h1>
            <h2 class="area">Etudiant en Master Informatique</h2>
            <h2 class="area">Déveloper Full Stack </h2> <br>
            <h3 align="left">Connect with me:</h3>
            <p align="left">
            <div class="social-medias-container">
            <a href="https://github.com/ALIAHMEDYoussouf">
                <i class="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/feed/">
                <i class="fab fa-linkedin"></i>
            </a>
         
            <a href="IMG/CV_Youssouf_Stage_2022_2023.pdf" download class="btn btn2">Telecharger CV</a>
          
        </div>
 </p>

            
          </div>
          <div class="rigth-side">
            <ul class="contacts">
              <li><i class="far fa-envelope"></i> youssoufali238@gmail.com</li>
              <li><i class="fa fa-phone" aria-hidden="true"></i> +33755408638</li>
              
            </ul> <img align="right" alt="Coding" width="180" src="https://www.e-communepassion.fr/wp-content/uploads/2018/06/UDL_COBRANDING_UJM-002-890x395.png">
            
          </div>
        </div>
        <h1 align="center">Bonjour👋 
        Bienvenue sur mon portfolio☕</h1>
        <div class="header-container_profile-description__bottom">
          <p>Etudiant en Master Informatique, je suis à la recherche d'un stage de 3 à 5 mois à partir d'avril 2023 en développeur Full Stack ou développeur java.
        
        </div>
      </div>
    </div>
    `
}

const hobbiesSkillsComponent = {
    template: `
    <aside class="skills">
      <div class="skills__front-end">
        <h2 class="title">Front End - Back End</h2>
        <div class="skills__front-end__container">
          <div class="skill-container">
            <h3 class="tech">Spring Boot</h3>
            <div class="level-bar-place-holder">
              <div class="level-bar"></div>
            </div>
          </div>
          <div class="skill-container">
            <h3 class="tech">Vue.js</h3>
            <div class="level-bar-place-holder">
              <div class="level-bar"></div>
            </div>
          </div>

          <div class="skill-container">
            <h3 class="tech">HTML</h3>
            <div class="level-bar-place-holder">
              <div class="level-bar"></div>
            </div>
          </div>

          <div class="skill-container">
            <h3 class="tech">CSS</h3>
            <div class="level-bar-place-holder">
              <div class="level-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="hobbies">
        <h2 class="title">LOISIRS</h2>

        <div class="hobbies-container">
          <div class="hobbies-container__hobbie-item">
            <img src="IMG/pexels-ibadah-mimpi-3224344.jpg" alt="" class="hobbie-img">
            <h4 class="hobbie-name">Lecture</h4>
            <p class="hobbie-description">Description de loisir</p>
          </div>

          <div class="hobbies-container__hobbie-item">
            <img src="IMG/football.jpg" alt="" class="hobbie-img">
            <h4 class="hobbie-name">Football</h4>
            <p class="hobbie-description">Description de loisir</p>
          </div>

          <div class="hobbies-container__hobbie-item">
            <img src="IMG/badmiton.jpg" alt="" class="hobbie-img">
            <h4 class="hobbie-name">Badmiton</h4>
            <p class="hobbie-description">Description de loisir</p>
          </div>

        </div>
      </div>
    </aside>
    `
}


const mainContainerComponent = {
    template: `
    <main class="main-container">
      <div class="main-container__blog-last-post">
        <h2 class="title">Blog</h2>
        <div class="blog-last-post__cover">
         
          <img src="IMG/pexels-neo-2653362.jpg" alt="" class="post-cover-img">
        </div>

        
        <a href="#">More about</a>
      </div>
      <aside class="skills">

      <div class="main-container__experiences">
      <table >
        <h3>EXPÉRIENCES PROFESSIONNELLE</h3>

        <div class="experiences__experience">
          <div class="experience__description">
            <h3 class="header-3">2021 - 2022</h3>
            <h2 class="header-2">Stage - Développeur web </h2>
            <h4 class="header-3">UNIGEST SOLUTIONS</h4>
            <h5 class="header-3">
                    - Gestion des Equipement grace a logiciel GMAO</h5>
            <h5 class="header-3">- Synchoniser évenement dans google Agenda grace à API Google</h5>
          </div>
        </div>

        <div class="btn-tags">
        <h3>FORMATION SCOLAIRE</h3><br>
          <div class="experience__description">
           <h3 class="header-3">2022 - 2024</h3>  
            <h2 class="header-2">Master Informatique - Donnée et Systeme Connecté</h2>
            <h4 class="header-3"> Université de Jean Monnet, Saint Etienne</h4>
           
            <h3 class="header-3"> 2021 - 2022  </h3>
            <h2 class="header-2">Licence 3 Informatique </h2>
            <h4 class="header-3"> Université de Corse, Corte</h4>
            <h3 class="header-3"> 2017 - 2020  </h3>
            <h2 class="header-2">Licence Informatique </h2>
          
            <h4 class="header-3">   Université de Djibouti</h4>
           
              <h3 class="header-3"> 2016 - 2017  </h3>
            <h2 class="header-2">Bac Scientique </h2>
            <h4 class="header-3">  Lycée de Hodan4 </h4>
            
          </div>
        </div>
        </aside>
      </div>
    </main>
    `
}

const projectControllerComponent = {
    template: `
    <section class="projects-section-controller"  id="project">
      <h2>Projects Scolaire</h2>
      <div class="project-section-controller__tags-container">
        <button class="btn-tags" :class="{active: tagsToSearch['#Front-end']}" @click="filterSearch('#Front-end')">Front-end</button>
        <button class="btn-tags" :class="{active: tagsToSearch['#Full-Stack']}" @click="filterSearch('#Full-Stack')">Full-Stack</button>
        <button class="btn-tags" :class="{active: tagsToSearch['#Logiciel']}" @click="filterSearch('#Logiciel')">Logiciel</button>
        <button class="btn-tags" :class="{active: tagsToSearch['#Game']}" @click="filterSearch('#Game')">Game</button>
      </div>
    </section>
    `,
    data() {
        return {
            tagsToSearch: { '#Front-end': true, '#Full-Stack': true, '#Game': true, '#Logiciel': true }
        }
    },
    methods: {
        filterSearch(key) {
            this.tagsToSearch[key] = !this.tagsToSearch[key]

            console.log(this.tagsToSearch)
            eventBus.$emit('filter', this.tagsToSearch)
        }
    }
}

const projectsShowUpConteinerComponent = {
    props: {
        projects: {
            type: Array,
            required: false
        }
    },
    template: `

    <section class="projects-section-container">
      <div v-for="project in projects" v-if="project.valid" class="project">
        <img :src="project.img" alt="project.name" class="project-img">
        <ul class="tag-list">
          <li v-for="tag in project.tags">{{ tag }}</li>
        </ul>
        <h2 class="project-title">{{ project.name }}</h2>
        <p>{{ project.description }}</p>

        <div class="project-buttons">
          <button class="demo" @click="goTo(project.demoURL)">Demo</button>
          <button class="code" @click="goTo(project.codeURL)">Code</button>
        </div>
      </div>
    </section>
    `,
    data() {
        return {
            tags: { '#Front-end': true, '#Full-Stack': true, '#Game': true, '#Logiciel': true }
        }
    }
    ,
    methods: {
        filterProjects(tags) {

        },
        goTo(link) {
            if(link){
                window.location.assign(link)
            }
        }
    },
    mounted() {
        eventBus.$on('filter', (tags) => {
            this.tags = tags
            eventBus.$emit('filter-projects', this.tags)
        })
    }
}

const eventBus = new Vue()

const app = new Vue({
    el: '.profile-container',
    data: {
        projects: [
            {
                img: 'IMG/fournisseur.jpg',
                name: 'MVC Site Web de gestion de fournitures',
                tags: ['#Web Full Stack'],
               
                // codeURL: le code nest pas disponible sur git hub,
                description: '- Site Web: Modele MVC HTML5, CSS3, PHP5, Bootstrap, JQuery et SQL pour Conception et exploitation de la BD',
                valid: true
            },
            {
                img: 'IMG/meteo.jpg',
                name: 'Appplication Météo avec framework React',
                tags: ['#Front-end'],
                // demoURL: 'https://youssouf.github.io/AwesomeQuotes/',
                codeURL: 'https://github.com/ALIAHMEDYoussouf/M-teo-React',
          
                description: '- Appplication Météo.',
                valid: true
            },
            {
                img: 'IMG/monopoly.jpg',
                name: 'Jeu de Monopoly',
                tags: ['#Game'],
                //le code nest pas disponible sur git hub
                description: '- UML Modélisation visuel et implementation en Java',
                valid: true
            },
            {
              img: 'IMG/airbnb.jpg',
              name: 'Air&bnb en Spring Boot',
              tags: ['#Web Full Stack'],
              codeURL: 'https://github.com/UJM-INFO/2022-pwa-d',
              description: '- Model View Controller (MVC)',
              valid: true
          },
          {
            img: 'IMG/comerce.jpg',
            name: 'Ecommerce Magasin',
            tags: ['#Logiciel'],
            codeURL: 'https://github.com/Mic-Firapat/ECR/tree/Youssouf',
            description: '- Document specification au format standart IEEE',
            valid: true
        },
        ]
    },
    components: {
        'header-component': headerComponent,
        'hobbies-skills-component': hobbiesSkillsComponent,
        'main-container-component': mainContainerComponent,
        'projects-panel-controller-component': projectControllerComponent,
        'projects-show-up-component': projectsShowUpConteinerComponent
    },
    mounted() {
        eventBus.$on('filter-projects', (tags) => {
            let flag = false


            for (const tag in tags) {
                for (let i = 0; i < this.projects.length; i++) {
                    for (let j = 0; j < this.projects[i].tags.length; j++) {
                        console.log(tag + ' == ' + this.projects[i].tags[j])
                        if (tags[tag] && tag == this.projects[i].tags[j]) {
                            flag = true;
                            this.projects[i].valid = true
                            break
                        } else if (tags[tag] == false && tag == this.projects[i].tags[j]) {
                            this.projects[i].valid = false
                        }
                    }
                }
            }
        })
    }
})