#include "tcp.h"
#include "ui_tcp.h"

Tcp::Tcp(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::Tcp)
{
    ui->setupUi(this);
}

Tcp::~Tcp()
{
    delete ui;
}
