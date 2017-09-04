require.config({
  baseUrl : '/public/assets',
  paths : {
    jquery : 'jquery/jquery.min',
    cookie : 'jquery-cookie/jquery.cookie',
    template : 'artTemplate/template-web',
    bootstrap : 'bootstrap/js/bootstrap.min',
    // 日期插件
    datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
    // 日期语言 非标准模块
    language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    validate : 'validate/jquery-validate.min',
    form : 'jquery-form/jquery.form',
    common : '../js/common',
    login : '../js/login',
    index : '../js/index',
    util : '../js/util',
    teacherlist : '../js/teacher-list',
    teacheradd : '../js/teacher-add'
  },
  shim : { // 把非标准模块转化为标准模块
    bootstrap : {
      deps : ['jquery']
    },
    language : {
      // 依赖jquery、datepicker
      deps : ['jquery','datepicker']
    },
    validate : {
      deps : ['jquery']
    }
  }
});