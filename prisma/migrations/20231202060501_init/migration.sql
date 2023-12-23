-- CreateTable
CREATE TABLE `accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `expire_date` DATETIME(3) NULL,
    `register_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `accounts_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `circles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `line_url` VARCHAR(191) NULL,
    `instagram_url` VARCHAR(191) NULL,
    `twitter_url` VARCHAR(191) NULL,
    `university` VARCHAR(191) NULL,
    `drinking_power` INTEGER NULL,
    `friends_power` INTEGER NULL,
    `gachi_power` INTEGER NULL,
    `love_power` INTEGER NULL,
    `member` INTEGER NULL,
    `place` VARCHAR(191) NULL,
    `annual_cost` INTEGER NULL,
    `active_day` VARCHAR(191) NULL,
    `main_content` VARCHAR(191) NULL,

    UNIQUE INDEX `circles_account_id_key`(`account_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `members` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `circleId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `introduction` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `achievement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `circleId` INTEGER NOT NULL,
    `trophy` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `qa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `circleId` INTEGER NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `main_image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `circleId` INTEGER NOT NULL,
    `filepath` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `content_image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `circleId` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
    `filepath` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `member_image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `circleId` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
    `filepath` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `circles` ADD CONSTRAINT `circles_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members` ADD CONSTRAINT `members_circleId_fkey` FOREIGN KEY (`circleId`) REFERENCES `circles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `achievement` ADD CONSTRAINT `achievement_circleId_fkey` FOREIGN KEY (`circleId`) REFERENCES `circles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `qa` ADD CONSTRAINT `qa_circleId_fkey` FOREIGN KEY (`circleId`) REFERENCES `circles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `main_image` ADD CONSTRAINT `main_image_circleId_fkey` FOREIGN KEY (`circleId`) REFERENCES `circles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `content_image` ADD CONSTRAINT `content_image_circleId_fkey` FOREIGN KEY (`circleId`) REFERENCES `circles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `member_image` ADD CONSTRAINT `member_image_circleId_fkey` FOREIGN KEY (`circleId`) REFERENCES `circles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
