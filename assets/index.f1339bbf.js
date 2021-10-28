import{u as e}from"./utils.7ca2fb6d.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";import{a as n,o as t,c as l,b as c,d as o,F as a,k as r,l as s,w as d,e as u,t as k}from"./vendor.1180558b.js";const g={info:{},list:[{title:"Apache Linkis Introduction",link:"/docs/introduction/index"},{title:"Deployment",link:"/docs/deploy/linkis",children:[{title:"Quick Deploy",link:"/docs/deploy/linkis"},{title:"EngineConnPlugin installation",link:"/docs/deploy/engins"},{title:"Cluster Deployment",link:"/docs/deploy/distributed"},{title:"Installation Hierarchical Structure",link:"/docs/deploy/structure"}]},{title:"User Manual",link:"/docs/manual/index",children:[{title:"User Manual",link:"/docs/manual/user"},{title:"How To Use",link:"/docs/manual/how_to_use"},{title:"Console User Manual",link:"/docs/manual/console"},{title:"Linkis-Cli Usage",link:"/docs/manual/linkis_cli"}]},{title:"Engine Usage",link:"/docs/engine/index",children:[{title:"Spark Engine",link:"/docs/engine/spark"},{title:"Hive Engine",link:"/docs/engine/hive"},{title:"Python Engine",link:"/docs/engine/python"},{title:"Shell Engine",link:"/docs/engine/shell"},{title:"JDBC Engine",link:"/docs/engine/jdbc"},{title:"Add An EngineConn",link:"/docs/engine/add_engine"}]},{title:"Tuning And Troubleshooting",link:"/docs/tuning/index",children:[{title:"Configuration",link:"/docs/tuning/configuration"},{title:"Tuning",link:"/docs/tuning/tuning"}]},{title:"Architecture",link:"/docs/architecture/index",children:[{title:"Job Submission",link:"/docs/architecture/job_submission"},{title:"Engine Start Process",link:"/docs/architecture/engine_start_process"},{title:"Difference Between1.0 And 0.x",link:"/docs/architecture/difference"},{title:"Computation Governance",link:"/docs/architecture/computation_governance"},{title:"Linkis Manager",link:"/docs/architecture/manager"},{title:"AppManager",link:"/docs/architecture/app_manager"},{title:"ResourceManager",link:"/docs/architecture/resource_manager"},{title:"LabelManager",link:"/docs/architecture/label_manager"},{title:"EngineConnManager",link:"/docs/architecture/engineconn_manager"},{title:"EngineConn",link:"/docs/architecture/engineconn"},{title:"EngineConnPlugin",link:"/docs/architecture/engineconn_plugin"},{title:"Public Enhancement Services",link:"/docs/architecture/public_enhancement"},{title:"ContextService",link:"/docs/architecture/context_service"},{title:"BML",link:"/docs/architecture/bml"},{title:"PublicService",link:"/docs/architecture/public_service"},{title:"Microservice Governance",link:"/docs/architecture/microservice_governance"},{title:"GateWay",link:"/docs/architecture/gateway"}]}]},h={info:{},list:[{title:"Apache Linkis 介绍",link:"/docs/introduction/index"},{title:"部署文档",link:"/docs/deploy/linkis",children:[{title:"快速部署Linkis1.0",link:"/docs/deploy/linkis"},{title:"安装EngineConnPlugin引擎插件",link:"/docs/deploy/engins"},{title:"分布式部署手册",link:"/docs/deploy/distributed"},{title:"安装包目录层级结构",link:"/docs/deploy/structure"}]},{title:"用户手册",link:"/docs/manual/index",children:[{title:"用户使用文档",link:"/docs/manual/user"},{title:"使用的几种方式",link:"/docs/manual/how_to_use"},{title:"管理台使用文档",link:"/docs/manual/console"},{title:"Linkis-Cli使用文档",link:"/docs/manual/linkis_cli"}]},{title:"引擎使用",link:"/docs/engine/index",children:[{title:"Spark引擎",link:"/docs/engine/spark"},{title:"Hive引擎",link:"/docs/engine/hive"},{title:"Python引擎",link:"/docs/engine/python"},{title:"Shell引擎",link:"/docs/engine/shell"},{title:"JDBC引擎",link:"/docs/engine/jdbc"},{title:"实现一个全新引擎",link:"/docs/engine/add_engine"}]},{title:"调优排障",link:"/docs/tuning/index",children:[{title:"参数列表",link:"/docs/tuning/configuration"},{title:"调优手册",link:"/docs/tuning/tuning"}]},{title:"架构设计",link:"/docs/architecture/index",children:[{title:"Job提交准备执行流程",link:"/docs/architecture/job_submission"},{title:"EngineConn启动全流程",link:"/docs/architecture/engine_start_process"},{title:"Linkis1.0与Linkis0.X的区别简述",link:"/docs/architecture/difference"},{title:"计算治理服务架构设计",link:"/docs/architecture/computation_governance"},{title:"Manager架构设计",link:"/docs/architecture/manager"},{title:"AppManager架构设计",link:"/docs/architecture/app_manager"},{title:"ResourceManager架构设计",link:"/docs/architecture/resource_manager"},{title:"LabelManager架构设计",link:"/docs/architecture/label_manager"},{title:"EngineConnManager架构设计",link:"/docs/architecture/engineconn_manager"},{title:"EngineConn架构设计",link:"/docs/architecture/engineconn"},{title:"EngineConnPlugin架构设计",link:"/docs/architecture/engineconn_plugin"},{title:"公共增强服务架构设计",link:"/docs/architecture/public_enhancement"},{title:"ContextService(上下文)架构设计",link:"/docs/architecture/context_service"},{title:"BML(物料库)架构设计",link:"/docs/architecture/bml"},{title:"PublicService(公共服务)架构设计",link:"/docs/architecture/public_service"},{title:"微服务治理服务架构设计",link:"/docs/architecture/microservice_governance"},{title:"GateWay(网关)架构设计文档",link:"/docs/architecture/gateway"}]}]},p={class:"ctn-block reading-area"},m={class:"main-content"},_={class:"side-bar"};var b=i({data:()=>({utils:e,jsonData:null}),created(){const e=localStorage.getItem("locale");this.jsonData="en"===e?g:h}},[["render",function(e,i,g,h,b,v){const y=n("router-view"),C=n("router-link");return t(),l("div",p,[c("main",m,[o(y)]),c("div",_,[(t(!0),l(a,null,r(b.jsonData.list,((e,i)=>(t(),s(C,{to:e.link,class:"bar-item",key:i},{default:d((()=>[u(k(e.title)+" ",1),(t(!0),l(a,null,r(e.children,((e,i)=>(t(),s(C,{to:e.link,class:"bar-item",key:i},{default:d((()=>[u(k(e.title),1)])),_:2},1032,["to"])))),128))])),_:2},1032,["to"])))),128))])])}]]);export{b as default};
