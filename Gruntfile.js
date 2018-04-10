module.exports = function(grunt) {

  grunt.initConfig({
  responsive_images: {
    dev: {
      options: {},
      sizes: [{
        width: 320,
        height: 240
      },{
        name: 'large',
        width: 640
      },{
        name: "large",
        width: 1024,
        suffix: "_x2",
        quality: 0.6
      }],
      files: [{
        expand: true,
        src: ['img/**/*.{jpg,gif,png}'],
        cwd: 'src/',
        dest: 'dist/'
      }]
    }
  },
  copy: {
    dev: {
      files: [{
        expand: true,
        src: ['**/*', '!app/img/**/*.*'],
        cwd: 'src/',
        dest: 'dist/'
      }]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-responsive-images');

grunt.registerTask('default', ['copy','responsive_images']);

};