"use client";
import { PageEditor } from "@/features/PageEditor/PageEditor";
import { queryClient } from "@/shared/lib/client";
import { createPage, deletePage } from "@/shared/api/pages";
import {
  Button,
  Input,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogClose,
  Dialog,
} from "@/shared/ui";
import { useMutation } from "@tanstack/react-query";
import { DeleteIcon, Settings } from "lucide-react";
import { useRef } from "react";
export const DeletePageBtn = ({
  name,
  ruId,
  kzId,
}: {
  name: string;
  ruId: number;
  kzId: number;
}) => {
  const { mutate, error, isPending } = useMutation({
    mutationKey: [`deletePage ${ruId} ${kzId}`],
    mutationFn: deletePage,
    onSuccess: () => {
      if (closeRef.current) closeRef.current.click();
      queryClient.invalidateQueries({ queryKey: ["mainPages"] });
    },
  });
  const closeRef = useRef<HTMLButtonElement>(null);
  const onDelete = () => {
    mutate(ruId);
    mutate(kzId);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <DeleteIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-center">
            Вы уверены, что хотите удалить страницу {name}
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className=" gap-2 sm:justify-center">
          <DialogClose asChild>
            <Button ref={closeRef} type="button" variant="secondary">
              Отменить
            </Button>
          </DialogClose>
          <Button onClick={onDelete} loading={isPending} disabled={isPending}>
            Удалить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
