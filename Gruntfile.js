module.exports = function(grunt) {

grunt.initConfig({
  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: '../site-html-css/styles',
        ext: '.css'
      }]
    }
  }
});


 
grunt.loadNpmTasks('grunt-contrib-sass');
 
grunt.registerTask('default', ['sass']);

}