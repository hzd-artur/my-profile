export default {
  data() {
    return {
      data: [
        {
          icon: 'xml',
          name: 'Programming Languages',
          children: [
            { icon: 'language-html5', key: 'html', name: 'HTML', exp: 100 },
            { icon: 'language-css3', key: 'css', name: 'CSS', exp: 90 },
            {
              icon: 'language-javascript',
              key: 'js',
              name: 'JavaScript',
              exp: 90,
            },
            { icon: 'language-cpp', key: 'cpp', name: 'C++', exp: 60 },
            {
              icon: 'language-typescript',
              key: 'ts',
              name: 'TypeScript',
              exp: 50,
            },
            { icon: 'language-lua', key: 'lua', name: 'Lua', exp: 75 },
            { icon: 'language-php', key: 'php', name: 'PHP', exp: 65 },
            { icon: 'database', key: 'sql', name: 'Sql and NoSql', exp: 65 },
          ],
        },
        {
          icon: 'file-code',
          name: 'Frameworks/Libs',
          children: [
            { icon: 'nodejs', name: 'Node/Yarn', key: 'node', exp: 100 },
            { icon: 'vuejs', name: 'Vue', key: 'vue', exp: 100 },
            { icon: 'nuxt', name: 'Nuxt', key: 'nuxt', exp: 90 },
            { icon: 'vuetify', name: 'Vuetify', key: 'vuetify', exp: 100 },
            {
              icon: 'nativescript',
              name: 'Vue Native',
              key: 'native',
              exp: 60,
            },
            {
              icon: 'bootstrap',
              name: 'Bootstrap',
              key: 'bootstrap',
              exp: 100,
            },
            { icon: 'sass', name: 'Sass', key: 'sass', exp: 60 },
            { icon: 'laravel', name: 'Laravel', key: 'laravel', exp: 75 },
          ],
        },
        {
          icon: 'pencil-ruler',
          name: 'Design',
          children: [
            { icon: 'image-edit', name: 'Photoshop', key: 'ps', exp: 100 },
            { icon: 'brush', name: 'Illustrator', key: 'il', exp: 90 },
            { icon: 'video', name: 'Premiere', key: 'pr', exp: 65 },
            { icon: 'volume-high', name: 'Audition', key: 'au', exp: 70 },
          ],
        },
        {
          icon: 'school',
          name: 'Education',
          children: [
            { icon: 'code-braces', name: 'Programming Course', key: 'pro' },
            { icon: 'cog', name: 'Engineering', key: 'eng' },
          ],
        },
        {
          icon: 'dots-horizontal',
          name: 'Other',
          children: [
            { icon: 'git', name: 'Git', key: 'git' },
            { icon: 'aws', name: 'Amazon Web Services', key: 'aws' },
            {
              icon: 'sitemap',
              name: 'Scrum and Workflow',
              key: 'scrum',
            },
            {
              icon: 'language-markdown',
              name: 'Documentation',
              key: 'doc',
            },
          ],
        },
      ],
      portfolio: [
        {
          src: 'portfolio/utopia.png',
          showInfo: false,
          title: 'Utopia',
          text: "Utopia is a project that I'm currently working on.<br>It's a GTA RolePlay server with a community market.<br>Since GTA's user interface is made on HTML, I'm using Vue + Vuetify for developing the interface.",
        },
        {
          src: 'portfolio/hazard.png',
          showInfo: false,
          title: 'Hazard',
          text: "This image is a logo that I made for a t-shirt company.<br>The concept was to make a radioactive / chemstry t-shirt brand. That's why I chose Hazard as a name.<br> It resembles a mask with text written on the goggles",
        },
        {
          src: 'portfolio/rainDrops.png',
          showInfo: false,
          title: 'Rain Drops',
          text: 'RainDrops is a homeopathic medicines brand I made for a company.<br>The concept was to make a modern and trustable brand for homeopathic medicines.',
        },
        {
          src: 'portfolio/obscure.png',
          showInfo: false,
          title: 'Obscure',
          text: 'This logo is for a eletronic music producer. <br> The logo resembles the "OC" (abbreviation for Obscure)',
        },
        {
          src: 'portfolio/gus.png',
          showInfo: false,
          title: 'Gus',
          text: 'This logo was made for a horticultural delivery company.',
        },
        {
          src: 'portfolio/growBot.png',
          showInfo: false,
          title: 'Grow Bot',
          text: 'Grow bot was a project that me and my group made for an automatic plant grower. <br> Basically, we used a circuit board with soil humidity, light and temperature sensors to control the plant development.',
        },
        {
          src: 'portfolio/entorta.png',
          showInfo: false,
          title: 'Entorta Burro',
          text: 'This logo me and a group of friends made for an event. <br>It was a college freshman party.<br> In portuguese "Entorta Burro" means "Bend the donkey", where the donkey represents the freshman\'s and "bend" means to get drunk.',
        },
        {
          src: 'portfolio/rocketRise.png',
          showInfo: false,
          title: 'Rocket Rise',
          text: 'This image I made for a physics water rocket challange in my university.',
        },
        {
          src: 'portfolio/ufscBlumenau.png',
          showInfo: false,
          title: 'Stammtisch',
          text: 'This image was the logo of a science/party event.',
        },
      ],
    }
  },
}
