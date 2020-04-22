---
last_modified_on: "2020-04-21"
title: "Environment"
description: "Understand the concept of Qovery environment"
---

import Steps from '@site/src/components/Steps';

**Environment** is a fully independent instance of your project (its applications, services, and data). On Qovery,
environments reflect your **Git** workflows. Qovery transforms every Git branch into a complete copy of your production environment,
including applications and their dependencies (databases, message brokers, storage, and others). We also replicate your production
data, so all your environments are close copies of your production setup.

<p align="center">
  <img src="/img/qovery_environments.svg" alt="Qovery environments" />
</p>

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/main-concepts/environment.md.erb
-->

## Complexity of managing multiple environments
When software teams work on new features, they rarely work using just one Git branch. New features are developed on dedicated branches and tested on
pre-production environments to make sure they work flawlessly before releasing to production. Achieving this, however, is often costly and troublesome:

- Creating new environments is hard and requires work and time from developers
- Keeping pre-prod environments identical to the production environment is even harder
- Number of environments developers can manage is very limited

**Creating and managing multiple environments requires work and time. Precious time that is better spent on delivering business value.**

Thanks to Qovery concept of environments, all these problems are solved. New environments are spun up in minutes without any work from your side.

## Benefits of using Qovery environments

<Steps headingDepth={3} hideFeedbackQuestion>

1.  ### Test new features in a production-like environment
    Introducing bugs to production is costly. You can't be sure your code works correctly if your testing environment is not the same as production.
    With Qovery, you can test new features in environments that are identical to your production, so you'll introduce fewer bugs to the product your clients use.

2.  ### Don't waste developers time
    Software development teams often implement multiple features at the same time. However, it's prevalent that developers are blocked from delivering new features quickly if they can't freely test their code. Testing features by multiple developers at the same time is often impossible if you have only one or two testing environments. Developers have to wait until their teammates finish with their tests. With Qovery, every developer can work and test his code using his copy of the production environment. No more wasted time. Shorten your development cycle and deliver new features quickly!

</Steps>

## Virtual Branches

You don't have to create a new `branch_X` branch in every application of your project to get a fully functional `branch_X` environment.

When `branch_X` is missing in part of your applications, Qovery deploys them from your production branch. After you create `branch_X` in any
of your applications, they are automatically redeployed from that branch in this environment.

## Managing costs

To limit costs, you can reduce the number of created environments to specific branches.

```yml
application:
  name: myapp
  project: test
  active_environments:
  - master
  - staging
  - test_x
```

The production environment (by default - `master`) use high-availability and resiliency systems for applications and databases. We guarantee that your app scales as you need and is available according to our SLAs.


