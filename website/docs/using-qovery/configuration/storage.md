---
last_modified_on: "2020-10-15"
title: "Storage"
description: "Learn how to configure Storage on Qovery"
---

import Alert from '@site/src/components/Alert';

The default filesystem for applications running on Qovery is ephemeral. Application data isn’t persisted across deploys and restarts, which works just fine for most apps because they use managed databases to persist data.

However, many applications need persistent disk storage that isn’t ephemeral. These include:

* Blogging platforms and CMSs like WordPress, Ghost, and Strapi.
* Collaboration apps like Mattermost, GitLab, and Discourse.

This is where Qovery Storage comes in. Qovery applications can use storage to store data that persists across deploys and restarts, making it easy to deploy stateful applications.

Qovery Storage supports:

|Type|Max IOPS|Max Throughput|Min Size|Max Size|Use cases|
|----|--------|--------------|--------|--------|---------|
|slow_hdd|250|250MB/s|500GB|16TB|Store a lot of data that do not need to be frequently accessed|
|hdd|500|500MB/s|500GB|16TB|Big data, Log processing|
|ssd|16000|250MB/s|1GB|16TB|Recommended for most workload|
|fast_ssd|64000|1GB/s|4GB|16TB|Critical business applications that require sustained IOPS like databases|

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/storage.md.erb
-->

## Configuration

To specify one or more storage attached to your application, you need to modify your `.qovery.yml`

```yaml title=".qovery.yml" {5-9}
application:
  name: jhipster-sample-app
  project: jhipster-sample-app
  publicly_accessible: true
  storage:
    - name: images
      type: ssd
      size: 10GB
      mount_point: /mnt/images
routers:
  - name: main
    routes:
      - application_name: jhipster-sample-app
        paths:
          - /*
```

* `name` must be unique across your storage attached to your application.
* `type` you have the choice between: `slow_hdd`, `hdd`, `ssd` and `fast_ssd`. Refer to the details above.
* `size` size in GB, and TB are available
* `mount_point` (optional): per default qovery will mount your disk into `/mnt/{name}`

## Delete a storage

To delete a storage, you have two options:
- Remove it from the configuration file, commit and push
- If you worked on a feature branch, delete the branch, and the storage instance automatically deletes as well

<Alert type="danger">

Delete action drops the storage and its data

</Alert>

<Alert type="info">

Backups are kept for 1 month if you need to recover.

</Alert>

## FAQ

### Do you use encryption
Yes, all your data are encrypted with AES-256.

### How to extend the size of a storage

<Alert type="warning">

Not yet supported

</Alert>

You need to update with a higher size value your storage.size property inside your `.qovery.yml`.

### How to reduce the size of a storage

Once you have defined the size of your storage, you can't reduce it. If you want to reduce the size, you must create a new storage with a smaller size, transfer the data from the old storage to the new one, then delete the old storage.

### How to change the Storage type

Once you have defined the type of your storage, you can't change it. If you want to change the type, you must create a new storage with the new type, transfer the data from the old storage to the new one, then delete the old storage.



