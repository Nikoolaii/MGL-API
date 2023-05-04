-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_ibfk_1`;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
