#Responsive Email Testbed#

This is just to create a good workflow to make responsive emails. It utilises the premailer ruby gem.


##Installation##

First install premailer (assuming you have ruby installed):

```
gem install premailer
```

Next, you will need to get the node dependencies

```
npm install

```

Ensure that you have gulp globally installed. If not then just simply run:

```
npm install -g gulp
```

##Workflow##

The aim really is to build a HTML based email using as close to best practices as you can with developing a normal website. 

Before you start ensure that gulp is watching:

```
gulp
```
and then edit index.html and the corresponding style sheets. Make sure that you are aware of the basic limitations of HTML emails. Tables are still king!