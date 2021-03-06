# 适配器模式

适配器模式的作用是解决两个软件实体间的接⼝不兼容的问题。

使⽤用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起⼯工作。

适配器的别名是包装器(wrapper)，这是⼀个相对简单的模式。

在程序开发中有许多这样的场景:当我们试图调⽤模块或者对象的某个接⼝时，却发现这个接口的格式并不符合目前的需求。这时候有两种解决办法，第一种是修改原来的接口实现，但如果原来的模块很复杂，或者我们拿到的模块是一段别⼈编写的经过压缩的代码，修改原接口就显得不不太现实了。第⼆种办法是创建一个适配器，将原接口转换为客户希望的另⼀个接口，客户只需要和适配器打交道。

适配器模式主要用来解决两个已有接口之间不匹配的问题，它不考虑这些接⼝是怎样实现的，也不考虑它们将来可能会如何演化。适配器器模式不需要改变已有的接口，就能够使它们协同作用。

装饰者模式和代理理模式也不会改变原有对象的接口，但装饰者模式的作⽤是为了给对象增加功能。

装饰者模式常常形成一条⻓的装饰链，⽽适配器模式通常只包装⼀次。代理模式是为了控制对象的访问，通常也只包装⼀次。

我们设计很多插件，有默认值，也算是适配器的⼀种应⽤，vue的prop校验，default也算是适配器的应⽤了

外观模式的作用倒是和适配器比较相似，有人把外观模式看成⼀组对象的适配器，但外观模式最显著的特点是定义了⼀个新的接口。
